import { useMemo, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useFaqs } from "../../../hooks";
import { TablaSimple, BarraAcciones } from "../molecules";

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

export const SeccionFAQ: React.FC = () => {
  const [q, setQ] = useState("");
  const { faqs, cargando } = useFaqs();

  const filas = useMemo(() => {
    return faqs
      .filter((f) => f.preguntaFaq.toLowerCase().includes(q.toLowerCase()))
      .map((f) => ({
        pregunta: f.preguntaFaq,
        respuesta: f.respuestaFaq,
        acciones: [
          {
            icono: <FaEdit className="w-4 h-4" />,
            color: "text-blue-600 hover:text-blue-700",
            titulo: "Editar pregunta",
            onClick: () => alert(`Editar: ${f.preguntaFaq}`),
          },
          {
            icono: <FaTrash className="w-4 h-4" />,
            color: "text-red-600 hover:text-red-700",
            titulo: "Eliminar pregunta",
            onClick: () => alert(`Eliminar: ${f.preguntaFaq}`),
          },
        ],
      }));
  }, [faqs, q]);

  if (cargando) {
    return <p className="text-gray-500 text-sm">Cargando FAQs...</p>;
  }

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
  ];

  return (
    <section id="faq" className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
          Preguntas frecuentes
        </h2>
        <BarraAcciones
          onNuevo={() => alert("Nueva FAQ")}
          onBuscar={setQ}
          placeholder="Buscar pregunta..."
        />
      </div>
      <TablaSimple<Fila> columnas={columnas} filas={filas} />
    </section>
  );
};
