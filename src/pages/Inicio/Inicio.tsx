import SEO from "../../components/SEO/SEO";
import { absoluteUrl } from "../../components/SEO/seo.utils";
import Hero from "../../components/Inicio/organisms/Hero";
import Introduccion from "../../components/Inicio/organisms/Introduccion";
import CarruselProyectos from "../../components/Inicio/organisms/CarruselProyectos";
import ExperienciasInteractivas from "../../components/Inicio/organisms/ExperienciasInteractivas";
import Estadisticas from "../../components/Inicio/organisms/Estadisticas";
import NoticiasRecientes from "../../components/Inicio/organisms/NoticiasRecientes";

function Inicio() {
  return (
    <>
      <SEO
        title="UdlaVerso | Realidad aumentada e innovación educativa"
        description="Explora los proyectos de realidad aumentada del UdlaVerso, una iniciativa de la Universidad de la Amazonia para impulsar la innovación tecnológica."
        path="/"
        keywords="UdlaVerso, realidad aumentada, innovación educativa, Universidad de la Amazonia"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UdlaVerso",
            url: absoluteUrl("/"),
            logo: absoluteUrl("/logos/logo.png"),
            parentOrganization: {
              "@type": "CollegeOrUniversity",
              name: "Universidad de la Amazonia",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "UdlaVerso",
            url: absoluteUrl("/"),
            inLanguage: "es-CO",
          },
        ]}
      />

      <Hero />

      <Introduccion />

      <CarruselProyectos />

      <ExperienciasInteractivas />

      <Estadisticas />

      <NoticiasRecientes />
    </>
  );
}

export default Inicio;
