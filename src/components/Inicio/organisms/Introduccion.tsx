import React from "react";
import Descripcion from "../molecules/Descripcion";
import VideoPresentacion from "../molecules/VideoPresentacion";

const Introduccion: React.FC = () => {
  return (
    <section
      id="introduccion"
      className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20 max-w-7xl mx-auto"
    >
      <Descripcion />

      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[90%] h-[90%] rounded-[50%] bg-gradient-to-br from-udlaverso-verde via-udlaverso-verdeClaro to-udlaverso-rojo opacity-20 blur-3xl"></div>
        </div>

        <VideoPresentacion
          url="https://www.youtube.com/embed/ScMzIvxBSi4"
          titulo="Video del UDLAVERSO"
        />
      </div>
    </section>
  );
};

export default Introduccion;
