import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  direccion: "left" | "right";
  onClick: () => void;
  deshabilitado?: boolean;
};

const BotonFlecha: React.FC<Props> = ({
  direccion,
  onClick,
  deshabilitado,
}) => {
  const Icono = direccion === "left" ? FaChevronLeft : FaChevronRight;

  return (
    <button
      onClick={onClick}
      disabled={deshabilitado}
      className={`flex items-center justify-center w-8 h-8 rounded-full
        bg-udlaverso-verde text-white shadow hover:bg-udlaverso-verde/90
        transition disabled:opacity-40 disabled:cursor-not-allowed`}
      title={direccion === "left" ? "Anterior" : "Siguiente"}
    >
      <Icono size={14} />
    </button>
  );
};

export default BotonFlecha;
