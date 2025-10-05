import React, { useEffect, useState } from "react";
import TarjetaProyecto from "../molecules/TarjetaProyecto";

const proyectos = [
  {
    titulo: "Proyecto 1",
    imagenes: [
      "/images/imagen1.png",
      "/images/imagen2.png",
      "/images/imagen3.jpg",
    ],
  },
  {
    titulo: "Proyecto 2",
    imagenes: [
      "/images/imagen2.png",
      "/images/imagen3.jpg",
      "/images/imagen1.png",
    ],
  },
  {
    titulo: "Proyecto 3",
    imagenes: [
      "/images/imagen3.jpg",
      "/images/imagen1.png",
      "/images/imagen2.png",
    ],
  },
  {
    titulo: "Proyecto 4",
    imagenes: [
      "/images/imagen1.png",
      "/images/imagen3.jpg",
      "/images/imagen2.png",
    ],
  },
  {
    titulo: "Proyecto 5",
    imagenes: [
      "/images/imagen2.png",
      "/images/imagen1.png",
      "/images/imagen3.jpg",
    ],
  },
  {
    titulo: "Proyecto 6",
    imagenes: [
      "/images/imagen3.jpg",
      "/images/imagen2.png",
      "/images/imagen1.png",
    ],
  },
];

const CarruselProyectos: React.FC = () => {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 768) setVisible(2);
      else if (window.innerWidth < 1024) setVisible(3);
      else setVisible(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const listaDuplicada = [...proyectos, ...proyectos];

  return (
    <section className="p-8 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Proyectos Destacados
      </h2>

      <div className="relative w-full group">
        <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused] [will-change:transform]">
          {listaDuplicada.map((proyecto, i) => (
            <div
              key={i}
              style={{ flex: `0 0 ${100 / visible}%` }}
              className="px-2"
            >
              <TarjetaProyecto
                titulo={proyecto.titulo}
                imagenes={proyecto.imagenes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarruselProyectos;
