import React from "react";
import { Link } from "react-router-dom";

interface Props {
  texto: string;
  ruta: string;
}

const EnlaceFooter: React.FC<Props> = ({ texto, ruta }) => {
  // Detecta si el enlace es externo (http o https)
  const esExterno = ruta.startsWith("http://") || ruta.startsWith("https://");

  if (esExterno) {
    return (
      <a
        href={ruta}
        target="_blank"
        rel="noopener noreferrer"
        className="text-udlaverso-gris hover:text-udlaverso-verde transition text-sm"
      >
        {texto}
      </a>
    );
  }

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
