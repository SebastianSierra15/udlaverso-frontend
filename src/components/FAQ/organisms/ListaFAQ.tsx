import { useFaqs } from "../../../hooks";
import { ItemFAQ } from "../molecules";

export const ListaFAQ: React.FC = () => {
  const { faqs, cargando } = useFaqs();

  if (cargando)
    return (
      <p className="text-center text-udlaverso-gris mt-10">
        Cargando preguntas frecuentes...
      </p>
    );

  if (!faqs.length)
    return (
      <p className="text-center text-udlaverso-gris mt-10">
        No hay preguntas frecuentes disponibles.
      </p>
    );

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-udlaverso-negro mb-10 text-center">
          Preguntas y respuestas más comunes
        </h2>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-10">
          {faqs.map((f) => (
            <ItemFAQ
              key={f.idFaq}
              pregunta={f.preguntaFaq}
              respuesta={f.respuestaFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
