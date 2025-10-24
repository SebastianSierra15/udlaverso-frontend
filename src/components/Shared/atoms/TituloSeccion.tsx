import React from "react";

interface Props {
  texto: string;
}

const TituloSeccion: React.FC<Props> = ({ texto }) => {
  return (
    <h4 className="text-lg font-semibold text-udlaverso-negro mb-3">{texto}</h4>
  );
};

export default TituloSeccion;
