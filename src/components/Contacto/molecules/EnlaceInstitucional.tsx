import React from "react";

interface Props {
  logoSrc?: string;
  nombre?: string;
  url?: string;
}

const EnlaceInstitucional: React.FC<Props> = ({
  logoSrc = "/logo/logo-udla.webp",
  nombre = "Universidad de la Amazonia",
  url = "https://www.uniamazonia.edu.co",
}) => {
  return (
    <div className="mt-4 flex items-center justify-start gap-3 border-t border-gray-100 pt-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group transition-transform"
      >
        <img
          src={logoSrc}
          alt={`Logo ${nombre}`}
          className="w-10 h-10 object-contain bg-white rounded-full shadow-sm p-1"
        />

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-udlaverso-verde group-hover:text-udlaverso-verdeClaro transition">
            {nombre}
          </span>

          <span className="text-xs text-udlaverso-gris">
            {url.replace("https://", "")}
          </span>
        </div>
      </a>
    </div>
  );
};

export default EnlaceInstitucional;
