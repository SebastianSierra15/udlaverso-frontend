import { useMemo, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import TablaSimple from "../molecules/TablaSimple";
import BarraAcciones from "../molecules/BarraAcciones";

type Fila = {
  proyecto: string;
  usuario: string;
  estrellas: number;
  comentario: string;
  fecha: string;
  acciones?: {
    icono: React.ReactNode;
    color: string;
    onClick: () => void;
    titulo: string;
  }[];
};

const mock: Fila[] = [
  {
    proyecto: "Isla Biodiversidad",
    usuario: "Ana",
    estrellas: 5,
    comentario: "Excelente",
    fecha: "2025-10-10",
  },
  {
    proyecto: "Laboratorio IoT",
    usuario: "Luis",
    estrellas: 4,
    comentario: "Muy útil",
    fecha: "2025-10-08",
  },
];

const SeccionComentarios: React.FC = () => {
  const [q, setQ] = useState("");

  const filas = useMemo(
    () =>
      mock
        .filter(
          (f) =>
            f.proyecto.toLowerCase().includes(q.toLowerCase()) ||
            f.usuario.toLowerCase().includes(q.toLowerCase())
        )
        .map((f) => ({
          ...f,
          acciones: [
            {
              icono: <FaCheck className="w-4 h-4" />,
              color: "text-green-600 hover:text-green-700",
              titulo: "Aprobar comentario",
              onClick: () => alert(`Aprobar comentario de ${f.usuario}`),
            },
            {
              icono: <FaTrash className="w-4 h-4" />,
              color: "text-red-600 hover:text-red-700",
              titulo: "Eliminar comentario",
              onClick: () => alert(`Eliminar comentario de ${f.usuario}`),
            },
          ],
        })),
    [q]
  );

  const columnas = [
    { id: "proyecto", titulo: "Proyecto" },
    { id: "usuario", titulo: "Usuario" },
    { id: "estrellas", titulo: "⭐" },
    { id: "comentario", titulo: "Comentario" },
    { id: "fecha", titulo: "Fecha" },
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
    <section id="comentarios" className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
          Comentarios
        </h2>
        <BarraAcciones
          onNuevo={() => alert("No aplica")}
          onBuscar={setQ}
          placeholder="Buscar comentario..."
        />
      </div>
      <TablaSimple<Fila> columnas={columnas as any} filas={filas} />
    </section>
  );
};

export default SeccionComentarios;
