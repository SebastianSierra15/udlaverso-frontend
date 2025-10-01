import React from "react";
import { Link } from "react-router-dom";

interface Props {
  texto: string;
  ruta: string;
}

const EnlaceFooter: React.FC<Props> = ({ texto, ruta }) => {
  return (
    <Link
      to={ruta}
      className="text-udlaverso-gris hover:text-udlaverso-verde transition text-sm"
    >
      {texto}
    </Link>
  );
};

export default EnlaceFooter;
