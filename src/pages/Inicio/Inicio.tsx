import Hero from "../../components/Inicio/organisms/Hero";
import Introduccion from "../../components/Inicio/organisms/Introduccion";
import CarruselProyectos from "../../components/Inicio/organisms/CarruselProyectos";
import ExperienciasInteractivas from "../../components/Inicio/organisms/ExperienciasInteractivas";
import Estadisticas from "../../components/Inicio/organisms/Estadisticas";
import NoticiasRecientes from "../../components/Inicio/organisms/NoticiasRecientes";

function Inicio() {
  return (
    <>
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
