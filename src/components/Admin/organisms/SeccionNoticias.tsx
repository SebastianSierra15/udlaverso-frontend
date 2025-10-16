import { useState, useMemo } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
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

const mock: Fila[] = [
  { titulo: "Nueva Isla Interactiva", fecha: "2025-10-02", estado: "activo" },
  { titulo: "Actualización UA3D", fecha: "2025-09-25", estado: "inactivo" },
];

const SeccionNoticias: React.FC = () => {
  const [q, setQ] = useState("");

  const filas = useMemo(
    () =>
      mock
        .filter((f) => f.titulo.toLowerCase().includes(q.toLowerCase()))
        .map((f) => ({
          ...f,
          acciones: [
            {
              icono: <FaEdit className="w-4 h-4" />,
              color: "text-blue-600 hover:text-blue-700",
              titulo: "Editar noticia",
              onClick: () => alert(`Editar: ${f.titulo}`),
            },
            {
              icono: <FaTrash className="w-4 h-4" />,
              color: "text-red-600 hover:text-red-700",
              titulo: "Eliminar noticia",
              onClick: () => alert(`Eliminar: ${f.titulo}`),
            },
          ],
        })),
    [q]
  );

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

  return (
    <section id="noticias" className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
          Noticias
        </h2>
        <BarraAcciones
          onNuevo={() => alert("Nueva noticia")}
          onBuscar={setQ}
          placeholder="Buscar noticia..."
        />
      </div>
      <TablaSimple<Fila>
        columnas={columnas as any}
        filas={filas}
        nombreEntidad="noticias"
      />
    </section>
  );
};

export default SeccionNoticias;
