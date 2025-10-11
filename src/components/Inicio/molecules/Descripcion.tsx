import React from "react";
import Texto from "../atoms/Texto";
import { Link } from "react-router-dom";

const Descripcion: React.FC = () => {
  return (
    <div className="flex flex-col justify-center md:pr-6 gap-4 max-w-xl">
      <h2 className="text-3xl md:text-3xl font-extrabold text-udlaverso-negro leading-tight">
        Explora el futuro con el UdlaVerso
      </h2>

      <Texto>
        Un espacio digital innovador que reúne los proyectos desarrollados por
        los estudiantes de Ingeniería de Sistemas de la Universidad de la
        Amazonia.
        <br />
        <br />
        El <span className="font-semibold">UDLAVERSO</span> es un portal que
        integra experiencias en{" "}
        <span className="font-semibold">realidad aumentada</span>, diseñadas
        para fortalecer el aprendizaje, la investigación y la creatividad. A
        través de esta plataforma, la comunidad académica puede descubrir,
        interactuar y compartir iniciativas tecnológicas que promueven la
        transformación digital desde la región amazónica hacia el mundo.
      </Texto>

      <Link to="/acerca-de">
        <Texto variante="enlace">Descubre más sobre nosotros &gt;</Texto>
      </Link>
    </div>
  );
};

export default Descripcion;
