import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNoticias } from "../../../hooks/useNoticias";
import { useEliminarNoticia } from "../../../hooks/useEliminarNoticia";
import TablaSimple from "../molecules/TablaSimple";
import BarraAcciones from "../molecules/BarraAcciones";
import InsigniaEstado from "../atoms/InsigniaEstado";
import ConfirmacionGlobal from "../../Shared/molecules/ConfirmacionGlobal";
import AlertaEmergente from "../../Shared/atoms/AlertaEmergente";

type Fila = {
  titulo: string;
  fecha: string;
  estado: "activo" | "inactivo";
  acciones?: {
    icono: React.ReactNode;
    color: string;
    onClick: () => void;
    titulo: string;
  }[];
};

const SeccionNoticias: React.FC = () => {
  const {
    noticias,
    setNoticias,
    total,
    page,
    pages,
    size,
    q,
    setPage,
    setSize,
    setQ,
    cargando,
    error,
  } = useNoticias();

  const navigate = useNavigate();

  const { eliminar, cargando: eliminando } = useEliminarNoticia();

  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<any>(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const manejarEliminar = (n: any) => {
    setNoticiaSeleccionada(n);
    setMostrarConfirmacion(true);
  };

  const confirmarEliminacion = async () => {
    setMostrarConfirmacion(false);
    try {
      await eliminar(noticiaSeleccionada.idNoticia);

      const nuevasNoticias = noticias.filter(
        (n) => n.idNoticia !== noticiaSeleccionada.idNoticia
      );

      setNoticias(nuevasNoticias);

      setAlerta({
        visible: true,
        mensaje: "Noticia eliminada correctamente 🗑️",
        tipo: "success",
      });
    } catch {
      setAlerta({
        visible: true,
        mensaje: "Error al eliminar la noticia.",
        tipo: "error",
      });
    }
  };

  const filas = useMemo(() => {
    return noticias.map((n) => ({
      titulo: n.tituloNoticia,
      fecha: n.fechapublicacionNoticia
        ? new Date(n.fechapublicacionNoticia).toLocaleDateString("es-ES")
        : "Sin fecha",
      estado: n.estadoNoticia === 1 ? "activo" : "inactivo",
      acciones: [
        {
          icono: <FaEdit className="w-4 h-4" />,
          color: "text-blue-600 hover:text-blue-700",
          titulo: "Editar noticia",
          onClick: () => navigate(`/admin/noticias/editar/${n.idNoticia}`),
        },
        {
          icono: <FaTrash className="w-4 h-4" />,
          color: "text-red-600 hover:text-red-700",
          titulo: "Eliminar noticia",
          onClick: () => manejarEliminar(n),
        },
      ],
    }));
  }, [noticias]);

  const columnas = [
    { id: "titulo", titulo: "Título" },
    { id: "fecha", titulo: "Fecha" },
    {
      id: "estado",
      titulo: "Estado",
      render: (f: Fila) => <InsigniaEstado estado={f.estado} />,
    },
    {
      id: "acciones",
      titulo: "Acciones",
      ancho: "100px",
      render: (f: Fila) => (
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

  if (cargando) {
    return <p className="text-gray-500 text-sm">Cargando noticias...</p>;
  }

  if (error) {
    return <p className="text-red-600 text-sm">{error}</p>;
  }

  return (
    <section id="noticias" className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
          Noticias
        </h2>

        <BarraAcciones
          onNuevo={() => navigate("/admin/noticias/nueva-noticia")}
          onBuscar={setQ}
          valor={q}
          placeholder="Buscar noticia..."
        />
      </div>

      {/* Tabla con paginación */}
      <TablaSimple
        columnas={columnas as any}
        filas={filas}
        nombreEntidad="noticias"
        paginaActual={page + 1}
        totalPaginas={pages}
        totalRegistros={total}
        porPagina={size}
        onCambioPagina={(nueva) => setPage(nueva - 1)}
        onCambioCantidad={(nueva) => setSize(nueva)}
      />

      {/* Confirmación */}
      <ConfirmacionGlobal
        visible={mostrarConfirmacion}
        titulo="Eliminar noticia"
        mensaje={`¿Estás seguro de eliminar "${noticiaSeleccionada?.tituloNoticia}"?`}
        textoConfirmar={eliminando ? "Eliminando..." : "Sí, eliminar"}
        textoCancelar="Cancelar"
        onConfirmar={confirmarEliminacion}
        onCancelar={() => setMostrarConfirmacion(false)}
      />

      {/* Alerta */}
      <AlertaEmergente
        visible={alerta.visible}
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        onClose={() => setAlerta({ ...alerta, visible: false })}
      />
    </section>
  );
};

export default SeccionNoticias;
