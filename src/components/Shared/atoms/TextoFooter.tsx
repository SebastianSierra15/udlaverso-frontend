import React from "react";

interface Props {
  texto: string;
}

const TextoFooter: React.FC<Props> = ({ texto }) => {
  return <p className="text-udlaverso-gris text-sm">{texto}</p>;
};

export default TextoFooter;
