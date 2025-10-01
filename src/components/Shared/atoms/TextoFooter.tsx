import React from "react";

interface Props {
  texto: string;
}

const TextoFooter: React.FC<Props> = ({ texto }) => {
  return <p className="text-sm text-udlaverso-gris">{texto}</p>;
};

export default TextoFooter;
