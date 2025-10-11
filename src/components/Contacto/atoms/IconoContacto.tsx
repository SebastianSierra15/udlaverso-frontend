import React from "react";

interface Props {
  icon: React.ReactNode;
  texto: string;
  link?: string;
}

const IconoContacto: React.FC<Props> = ({ icon, texto, link }) => {
  const contenido = (
    <div className="flex items-center gap-3 text-udlaverso-gris hover:text-udlaverso-verde transition-colors">
      {icon}
      <span className="text-sm">{texto}</span>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {contenido}
    </a>
  ) : (
    contenido
  );
};

export default IconoContacto;
