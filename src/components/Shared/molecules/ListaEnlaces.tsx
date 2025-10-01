import React from "react";
import TituloSeccion from "../atoms/TituloSeccion";
import EnlaceFooter from "../atoms/EnlaceFooter";

interface Props {
  titulo: string;
  enlaces: { texto: string; ruta: string }[];
}

const ListaEnlaces: React.FC<Props> = ({ titulo, enlaces }) => {
  return (
    <div>
      <TituloSeccion texto={titulo} />
      <ul className="flex flex-col gap-2">
        {enlaces.map((enlace, i) => (
          <li key={i}>
            <EnlaceFooter texto={enlace.texto} ruta={enlace.ruta} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEnlaces;
