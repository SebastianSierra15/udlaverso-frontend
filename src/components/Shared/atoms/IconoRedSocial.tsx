import React from "react";

interface Props {
  icono: React.ReactNode;
  url: string;
  label: string;
}

const IconoRedSocial: React.FC<Props> = ({ icono, url, label }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-udlaverso-verde hover:text-udlaverso-verdeOscuro hover:scale-105 duration-300 transition-transform"
    >
      {icono}
    </a>
  );
};

export default IconoRedSocial;
