import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/Acerca/organisms/HeroSection";
import SeccionImagenTexto from "../../components/Acerca/organisms/SeccionImagenTexto";
import SeccionUniversidad from "../../components/Acerca/organisms/SeccionUniversidad";
import SeccionCaracteristicas from "../../components/Acerca/organisms/SeccionCaracteristica";
import Autores from "../../components/Acerca/organisms/Autores";

const AcercaDe: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Acerca del UdlaVerso - Universidad de la Amazonia</title>
        <meta
          name="description"
          content="Conoce el UdlaVerso, la iniciativa tecnológica de la Universidad de la Amazonia que transforma la educación mediante experiencias inmersivas y realidad aumentada."
        />
      </Helmet>

      <HeroSection
        titulo="Acerca del UdlaVerso"
        descripcion="Una iniciativa tecnológica de la Universidad de la Amazonia que impulsa la educación inmersiva y la innovación académica."
        imagenFondo="/images/hero-acercade.webp"
        textoBotonPrincipal="Descargar visor"
        linkBotonPrincipal="/descargas"
        textoBotonSecundario="Conoce más"
        linkBotonSecundario="/proyectos"
      />

      <SeccionUniversidad />

      <SeccionImagenTexto
        titulo="Un espacio para la educación inmersiva"
        texto="Nacido en 2021, el UdlaVerso surge como un laboratorio de innovación académica que impulsa experiencias de aprendizaje apoyadas en tecnologías inmersivas. Es una puerta hacia el futuro educativo donde el conocimiento se vive, no solo se estudia."
        imgSrc="/images/bus.webp"
        imgAlt="Exploración del UdlaVerso"
        invertir={true}
        gradient={true}
        direccionGradient="up"
      />

      <SeccionCaracteristicas />

      <SeccionImagenTexto
        titulo="Impacto en la educación amazónica"
        texto="El UdlaVerso fortalece la vinculación entre la academia, la tecnología y la región, convirtiéndose en un referente de innovación educativa. Permite la difusión de proyectos, la colaboración remota y el acceso abierto al conocimiento generado por la comunidad universitaria."
        imgSrc="/images/parque.webp"
        imgAlt="Impacto del UdlaVerso"
        gradient={true}
        direccionGradient="up"
      />

      <Autores />
    </>
  );
};

export default AcercaDe;
