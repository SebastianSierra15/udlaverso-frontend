import React from "react";

interface Props {
  url: string;
  titulo: string;
}

const VideoPresentacion: React.FC<Props> = ({ url, titulo }) => {
  return (
    <div className="relative w-full max-w-md aspect-video rounded-2xl shadow-2xl border border-white/30 bg-white/5 backdrop-blur-sm group cursor-pointer">
      {/* Efecto brillante detrás del video */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-udlaverso-verde/20 via-udlaverso-verdeClaro/20 to-udlaverso-rojo/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      {/* Contenedor del video */}
      <div className="relative w-full h-full z-10 overflow-hidden rounded-2xl">
        <iframe
          className="w-full h-full rounded-2xl transition-transform duration-700 brightness-100 group-hover:brightness-110"
          src={url}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay superior con efecto visual (visible sobre el iframe) */}
      <div className="absolute inset-0 rounded-2xl bg-transparent group-hover:bg-white/5 mix-blend-overlay transition-all duration-700 pointer-events-none z-20"></div>
    </div>
  );
};

export default VideoPresentacion;
