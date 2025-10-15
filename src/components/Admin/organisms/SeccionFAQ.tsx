import { useMemo, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TablaSimple from "../molecules/TablaSimple";
import BarraAcciones from "../molecules/BarraAcciones";

type Fila = {
  pregunta: string;
  respuesta: string;
  acciones?: {
    icono: React.ReactNode;
    color: string;
    onClick: () => void;
    titulo: string;
  }[];
};

const mock: Fila[] = [
  { pregunta: "¿Qué es UdlaVerso?", respuesta: "Portal de proyectos con RA." },
  {
    pregunta: "¿Cómo publico un proyecto?",
    respuesta: "Desde el panel de admin.",
  },
];

const SeccionFAQ: React.FC = () => {
  const [q, setQ] = useState("");

  const filas = useMemo(
    () =>
      mock
        .filter((f) => f.pregunta.toLowerCase().includes(q.toLowerCase()))
        .map((f) => ({
          ...f,
          acciones: [
            {
              icono: <FaEdit className="w-4 h-4" />,
              color: "text-blue-600 hover:text-blue-700",
              titulo: "Editar pregunta",
              onClick: () => alert(`Editar: ${f.pregunta}`),
            },
            {
              icono: <FaTrash className="w-4 h-4" />,
              color: "text-red-600 hover:text-red-700",
              titulo: "Eliminar pregunta",
              onClick: () => alert(`Eliminar: ${f.pregunta}`),
            },
          ],
        })),
    [q]
  );

  const columnas = [
    { id: "pregunta", titulo: "Pregunta" },
    { id: "respuesta", titulo: "Respuesta" },
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
    <section id="faq" className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
          FAQ
        </h2>
        <BarraAcciones
          onNuevo={() => alert("Nueva FAQ")}
          onBuscar={setQ}
          placeholder="Buscar pregunta..."
        />
      </div>
      <TablaSimple<Fila> columnas={columnas as any} filas={filas} />
    </section>
  );
};

export default SeccionFAQ;
