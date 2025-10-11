import React, { useState, useEffect } from "react";

interface Props {
  id: number;
  titulo: string;
  resumen: string;
  imagenes: string[];
}

const TarjetaProyectoListado: React.FC<Props> = ({
  id,
  titulo,
  resumen,
  imagenes,
}) => {
  const [indice, setIndice] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;
    if (hover && imagenes.length > 1) {
      intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % imagenes.length);
      }, 1500);
    }
    return () => clearInterval(intervalo);
  }, [hover, imagenes.length]);

  return (
    <article
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => window.open(`/proyectos/${id}`, "_blank")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndice(0);
      }}
    >
      <div className="relative w-full h-40 md:h-44">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${titulo} imagen ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
              i === indice ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-udlaverso-negro">{titulo}</h3>
        <p className="text-sm text-udlaverso-gris mt-1 line-clamp-2">
          {resumen}
        </p>
      </div>
    </article>
  );
};

export default TarjetaProyectoListado;
