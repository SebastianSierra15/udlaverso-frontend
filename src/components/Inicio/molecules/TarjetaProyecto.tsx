import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  titulo: string;
  imagenes: string[];
  descripcion?: string;
}

const TarjetaProyecto: React.FC<Props> = ({
  titulo,
  imagenes,
  descripcion,
}) => {
  const [indice, setIndice] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;
    if (hover) {
      intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % imagenes.length);
      }, 1500);
    }
    return () => clearInterval(intervalo);
  }, [hover, imagenes.length]);

  return (
    <Link
      to={`/proyectos/${encodeURIComponent(
        titulo.toLowerCase().replace(/\s+/g, "-")
      )}`}
      className="relative block rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300 cursor-pointer isolation-isolate"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndice(0);
      }}
    >
      <div className="relative w-full h-40 md:h-48">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${titulo} imagen ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === indice ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <h3
        className={`absolute bottom-2 left-2 text-sm md:text-base font-bold text-white bg-black/50 px-2 py-1 rounded transition-opacity duration-300 ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      >
        {titulo}
      </h3>

      <div
        className={`absolute inset-x-0 bottom-0 bg-black/70 text-white text-sm p-3 transition-all duration-500 ease-out transform ${
          hover ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <p className="text-xs md:text-sm text-center leading-snug">
          {descripcion || "Descripción breve del proyecto"}
        </p>
      </div>
    </Link>
  );
};

export default TarjetaProyecto;
