import SEO from "../../components/SEO/SEO";
import HeroFAQ from "../../components/FAQ/organisms/HeroFAQ";
import ListaFAQ from "../../components/FAQ/organisms/ListaFAQ";
import { useFaqs } from "../../hooks/useFaqs";

const FAQ: React.FC = () => {
  const { faqs, cargando } = useFaqs();

  return (
    <>
      <SEO
        title="Preguntas frecuentes sobre UdlaVerso | FAQ"
        description="Encuentra respuestas sobre el portal UdlaVerso, el visor UA3D y la interacción con los proyectos de realidad aumentada."
        path="/preguntas-frecuentes"
        image="/images/bus.webp"
        keywords="preguntas frecuentes UdlaVerso, FAQ visor UA3D, realidad aumentada"
        schema={
          faqs.length
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.preguntaFaq,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.respuestaFaq,
                  },
                })),
              }
            : undefined
        }
      />
      <HeroFAQ />

      <ListaFAQ faqs={faqs} cargando={cargando} />
    </>
  );
};

export default FAQ;
