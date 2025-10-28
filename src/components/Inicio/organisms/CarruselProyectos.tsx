import React, { useEffect, useState } from "react";
import { useProyectosMasVistos } from "../../../hooks/useProyectosMasVistos";
import TarjetaProyecto from "../molecules/TarjetaProyecto";
import CarruselProyectosSkeleton from "./CarruselProyectosSkeleton";

const CarruselProyectos: React.FC = () => {
  const { proyectos, cargando } = useProyectosMasVistos(10);
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
    <section className="bg-gradient-to-b from-white to-udlaverso-verde/10 px-8 py-16 overflow-hidden space-y-16">
      <h2 className="text-3xl text-center font-extrabold text-udlaverso-negro leading-tight">
        Proyectos destacados
      </h2>

      {cargando ? (
        <CarruselProyectosSkeleton />
      ) : (
        <div className="relative w-full group">
          <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused] [will-change:transform]">
            {listaDuplicada.map((proyecto, i) => (
              <div
                key={i}
                style={{ flex: `0 0 ${100 / visible}%` }}
                className="px-2 max-w-96"
              >
                <TarjetaProyecto
                  titulo={proyecto.nombreProyecto}
                  imagenes={
                    proyecto.imagenesProyecto ?? ["/images/placeholder.png"]
                  }
                  descripcion={proyecto.descripcioncortaProyecto}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CarruselProyectos;
