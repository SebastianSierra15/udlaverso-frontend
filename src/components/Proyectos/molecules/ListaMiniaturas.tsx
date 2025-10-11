import { useRef, useEffect } from "react";
import Miniatura from "../atoms/Miniatura";

interface Props {
  imagenes: string[];
  activa: number;
  onSeleccionar: (i: number) => void;
}

const ListaMiniaturas: React.FC<Props> = ({
  imagenes,
  activa,
  onSeleccionar,
}) => {
  const contenedorRef = useRef<HTMLDivElement>(null);

  // Permitir arrastre horizontal (swipe con mouse)
  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      contenedor.classList.add("cursor-grabbing");
      startX = e.pageX - contenedor.offsetLeft;
      scrollLeft = contenedor.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - contenedor.offsetLeft;
      const walk = (x - startX) * 1.5;
      contenedor.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDragging = false;
      contenedor.classList.remove("cursor-grabbing");
    };

    const onMouseLeave = onMouseUp;

    contenedor.addEventListener("mousedown", onMouseDown);
    contenedor.addEventListener("mousemove", onMouseMove);
    contenedor.addEventListener("mouseup", onMouseUp);
    contenedor.addEventListener("mouseleave", onMouseLeave);

    // Bloquear arrastre nativo de imágenes
    const imgs = contenedor.querySelectorAll("img");
    imgs.forEach((img) =>
      img.addEventListener("dragstart", (e) => e.preventDefault())
    );

    return () => {
      contenedor.removeEventListener("mousedown", onMouseDown);
      contenedor.removeEventListener("mousemove", onMouseMove);
      contenedor.removeEventListener("mouseup", onMouseUp);
      contenedor.removeEventListener("mouseleave", onMouseLeave);
      imgs.forEach((img) =>
        img.removeEventListener("dragstart", (e) => e.preventDefault())
      );
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={contenedorRef}
        className="flex gap-3 overflow-x-auto no-scrollbar cursor-grab"
        style={{
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {imagenes.map((img, i) => (
          <Miniatura
            key={i}
            src={img}
            activa={i === activa}
            onClick={() => onSeleccionar(i)}
          />
        ))}
      </div>

      {/* Gradientes laterales */}
      {imagenes.length > 4 && (
        <>
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none" />
        </>
      )}
    </div>
  );
};

export default ListaMiniaturas;
