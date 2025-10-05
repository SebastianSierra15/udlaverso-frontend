import React, { useState, useEffect } from "react";

interface Props {
  titulo: string;
  imagenes: string[];
}

const TarjetaProyecto: React.FC<Props> = ({ titulo, imagenes }) => {
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
    <div
      className="relative rounded-lg shadow-md overflow-hidden transition transform hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
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

      <h3 className="absolute bottom-2 left-2 text-sm md:text-base font-bold text-white bg-black/50 px-2 py-1 rounded">
        {titulo}
      </h3>
    </div>
  );
};

export default TarjetaProyecto;
