import React, { useState, useEffect } from "react";
import ImagenProyecto from "../atoms/ImagenProyecto";
import CategoriaChip from "../atoms/CategoriaChip";

interface Props {
  titulo: string;
  resumen: string;
  imagenes: string[];
  categorias?: string[];
}

const TarjetaProyectoListado: React.FC<Props> = ({
  titulo,
  resumen,
  imagenes,
  categorias = [],
}) => {
  const [indice, setIndice] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;
    if (hover && imagenes.length > 1) {
      intervalo = setInterval(
        () => setIndice((prev) => (prev + 1) % imagenes.length),
        1500
      );
    }
    return () => clearInterval(intervalo);
  }, [hover, imagenes.length]);

  const slug = encodeURIComponent(titulo.toLowerCase().replace(/\s+/g, "-"));

  return (
    <article
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => window.open(`/proyectos/${slug}`, "_blank")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndice(0);
      }}
    >
      <div className="relative w-full h-40 md:h-44">
        {imagenes.map((img, i) => (
          <ImagenProyecto
            key={i}
            src={img}
            alt={`${titulo} imagen ${i + 1}`}
            visible={i === indice}
          />
        ))}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-udlaverso-negro">{titulo}</h3>

        {categorias.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {categorias.slice(0, 3).map((cat, i) => (
              <CategoriaChip key={i} texto={cat} />
            ))}
          </div>
        )}

        <p className="text-sm text-udlaverso-gris mt-1 line-clamp-2">
          {resumen}
        </p>
      </div>
    </article>
  );
};

export default TarjetaProyectoListado;
