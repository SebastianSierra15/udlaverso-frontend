import React from "react";
import Descripcion from "../molecules/Descripcion";

const Introduccion: React.FC = () => {
  return (
    <section
      id="introduccion"
      className="flex flex-col md:flex-row items-center justify-between gap-12 px-20 py-12 max-w-7xl mx-auto"
    >
      <Descripcion />

      {/* Video */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[90%] h-[90%] rounded-[50%] bg-gradient-to-br from-udlaverso-verde via-udlaverso-verdeClaro to-udlaverso-rojo opacity-20 blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/30 bg-white/5 backdrop-blur-sm">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Video del UDLAVERSO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Introduccion;
