import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useProyectos } from "../../../hooks/useProyectos";
import { useEliminarProyecto } from "../../../hooks/useEliminarProyecto";
import TablaSimple from "../molecules/TablaSimple";
import BarraAcciones from "../molecules/BarraAcciones";
import InsigniaEstado from "../atoms/InsigniaEstado";
import ModalVistaProyecto from "../molecules/ModalVistaProyecto";
import ConfirmacionGlobal from "../../Shared/molecules/ConfirmacionGlobal";
import AlertaEmergente from "../../Shared/atoms/AlertaEmergente";

type FilaProyecto = {
  id?: string | number;
  nombre: string;
  categoria: string;
  autor: string;
  estado: "activo" | "inactivo";
  visitas: number;
  acciones?: {
    icono: React.ReactNode;
    onClick: () => void;
    color: string;
    titulo: string;
  }[];
};

const SeccionProyectos: React.FC = () => {
  const navigate = useNavigate();

  const { eliminarProyecto } = useEliminarProyecto();

  const [confirmVisible, setConfirmVisible] = useState(false);
  const [proyectoAEliminar, setProyectoAEliminar] = useState<{
    id: number;
    nombre: string;
  } | null>(null);
  const [alerta, setAlerta] = useState<{
    visible: boolean;
    mensaje: string;
    tipo: "success" | "error";
  }>({
    visible: false,
    mensaje: "",
    tipo: "success",
  });

  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<FilaProyecto | null>(null);

  const {
    proyectos,
    total,
    page,
    pages,
    size,
    q,
    setPage,
    setSize,
    setQ,
    loading,
    error,
  } = useProyectos();

  const filas = useMemo(() => {
    return proyectos.map((p) => ({
      id: p.idProyecto,
      nombre: p.nombreProyecto || "Sin nombre",
      categoria: p.categoriaNombre || "Sin categoría",
      autor: p.autorProyecto || "Desconocido",
      estado: p.estadoProyecto === 1 ? "activo" : "inactivo",
      visitas: Number(p.visualizacionesProyecto) || 0,
      acciones: [
        {
          icono: <FaEye className="w-4 h-4" />,
          color: "text-green-600 hover:text-green-700",
          titulo: "Ver proyecto",
          onClick: () =>
            setProyectoSeleccionado({
              nombre: p.nombreProyecto || "Sin nombre",
              categoria: p.categoriaNombre || "Sin categoría",
              autor: p.autorProyecto || "Desconocido",
              estado: p.estadoProyecto === 1 ? "activo" : "inactivo",
              visitas: Number(p.visualizacionesProyecto) || 0,
            }),
        },
        {
          icono: <FaEdit className="w-4 h-4" />,
          color: "text-blue-600 hover:text-blue-700",
          titulo: "Editar proyecto",
          onClick: () =>
            navigate(
              `/admin/proyectos/editar/${p.nombreProyecto
                .toLowerCase()
                .replace(/\s+/g, "-")}`
            ),
        },
        {
          icono: <FaTrash className="w-4 h-4" />,
          color: "text-red-600 hover:text-red-700",
          titulo: "Eliminar proyecto",
          onClick: () => {
            setProyectoAEliminar({
              id: Number(p.idProyecto),
              nombre: p.nombreProyecto,
            });
            setConfirmVisible(true);
          },
        },
      ],
    }));
  }, [proyectos]);

  const columnas = [
    { id: "nombre", titulo: "Proyecto" },
    { id: "categoria", titulo: "Categoría" },
    { id: "autor", titulo: "Autor" },
    {
      id: "estado",
      titulo: "Estado",
      render: (f: FilaProyecto) => <InsigniaEstado estado={f.estado} />,
    },
    { id: "visitas", titulo: "Visitas" },
    {
      id: "acciones",
      titulo: "Acciones",
      ancho: "120px",
      render: (f: FilaProyecto) => (
        <div className="flex gap-3 justify-start">
          {f.acciones?.map((a, i) => (
            <button
              key={i}
              onClick={a.onClick}
              title={a.titulo}
              className={`transition ${a.color}`}
            >
              {a.icono}
            </button>
          ))}
        </div>
      ),
    },
  ] as const;

  if (loading) {
    return <p className="text-gray-500 text-sm">Cargando proyectos...</p>;
  }

  if (error) {
    return <p className="text-red-600 text-sm">{error}</p>;
  }

  return (
    <>
      <section id="proyectos" className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
            Proyectos
          </h2>

          <BarraAcciones
            onNuevo={() => alert("Nuevo proyecto")}
            onBuscar={setQ}
            valor={q}
            placeholder="Buscar proyecto..."
          />
        </div>

        {/* Tabla */}
        <TablaSimple
          columnas={columnas as any}
          filas={filas}
          nombreEntidad="proyectos"
          paginaActual={page + 1}
          totalPaginas={pages}
          totalRegistros={total}
          porPagina={size}
          onCambioPagina={(nueva) => setPage(nueva - 1)}
          onCambioCantidad={(nueva) => setSize(nueva)}
        />

        {/* Modal de vista rápida */}
        {proyectoSeleccionado && (
          <ModalVistaProyecto
            proyecto={{
              id: "1",
              titulo: proyectoSeleccionado.nombre,
              categoria: proyectoSeleccionado.categoria,
              promedio: 4.5,
              visitas: proyectoSeleccionado.visitas,
              autor: proyectoSeleccionado.autor,
              fecha: new Date().toISOString(),
              descripcionCorta:
                "Vista previa del proyecto en modo administrador.",
              linkProyecto:
                "/proyectos/" +
                proyectoSeleccionado.nombre.toLowerCase().replace(/\s+/g, "-"),
              imagenes: ["/images/imagen1.png"],
            }}
            onClose={() => setProyectoSeleccionado(null)}
          />
        )}
      </section>

      {/* Modal de confirmación para eliminar */}
      <ConfirmacionGlobal
        visible={confirmVisible}
        titulo="Eliminar proyecto"
        mensaje={`¿Seguro que deseas eliminar "${proyectoAEliminar?.nombre}"?`}
        textoConfirmar="Eliminar"
        textoCancelar="Cancelar"
        onConfirmar={async () => {
          if (proyectoAEliminar) {
            const ok = await eliminarProyecto(proyectoAEliminar.id);
            setConfirmVisible(false);

            if (ok) {
              setAlerta({
                visible: true,
                mensaje: "Proyecto eliminado correctamente",
                tipo: "success",
              });
              setTimeout(() => window.location.reload(), 1200);
            } else {
              setAlerta({
                visible: true,
                mensaje: "Error al eliminar el proyecto",
                tipo: "error",
              });
            }
          }
        }}
        onCancelar={() => {
          setConfirmVisible(false);
          setProyectoAEliminar(null);
        }}
      />

      {/* Alerta emergente para mostrar resultado */}
      <AlertaEmergente
        visible={alerta.visible}
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        onClose={() => setAlerta((prev) => ({ ...prev, visible: false }))}
      />
    </>
  );
};

export default SeccionProyectos;
