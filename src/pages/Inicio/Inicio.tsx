import { Helmet } from "react-helmet-async";
import Hero from "../../components/Inicio/organisms/Hero";
import Introduccion from "../../components/Inicio/organisms/Introduccion";
import CarruselProyectos from "../../components/Inicio/organisms/CarruselProyectos";
import ExperienciasInteractivas from "../../components/Inicio/organisms/ExperienciasInteractivas";
import Estadisticas from "../../components/Inicio/organisms/Estadisticas";
import NoticiasRecientes from "../../components/Inicio/organisms/NoticiasRecientes";

function Inicio() {
  return (
    <>
      {/* Metadatos */}
      <Helmet>
        <title>Inicio - UdlaVerso</title>
        <meta
          name="description"
          content="Explora los proyectos de realidad aumentada del UdlaVerso, una iniciativa de la Universidad de la Amazonia para impulsar la innovación tecnológica."
        />
        <meta property="og:title" content="Inicio - UdlaVerso" />
        <meta
          property="og:description"
          content="Conoce los proyectos interactivos, laboratorios IoT y experiencias en RA desarrollados por los estudiantes de Ingeniería de Sistemas."
        />
        <meta property="og:image" content="/images/hero.webp" />
      </Helmet>

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
