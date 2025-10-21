import { useMemo } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNoticias } from "../../../hooks/useNoticias";
import TablaSimple from "../molecules/TablaSimple";
import BarraAcciones from "../molecules/BarraAcciones";
import InsigniaEstado from "../atoms/InsigniaEstado";

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

  const filas = useMemo(() => {
    return noticias.map((n) => ({
      titulo: n.tituloNoticia,
      fecha: new Date(n.fechapublicacionNoticia).toLocaleDateString("es-ES"),
      estado: n.estadoNoticia === 1 ? "activo" : "inactivo",
      acciones: [
        {
          icono: <FaEdit className="w-4 h-4" />,
          color: "text-blue-600 hover:text-blue-700",
          titulo: "Editar noticia",
          onClick: () => alert(`Editar: ${n.tituloNoticia}`),
        },
        {
          icono: <FaTrash className="w-4 h-4" />,
          color: "text-red-600 hover:text-red-700",
          titulo: "Eliminar noticia",
          onClick: () => alert(`Eliminar: ${n.tituloNoticia}`),
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
          onNuevo={() => alert("Nueva noticia")}
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
    </section>
  );
};

export default SeccionNoticias;
