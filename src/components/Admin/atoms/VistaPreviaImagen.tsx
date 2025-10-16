import React from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  src: string;
  alt?: string;
  onRemove?: () => void;
};

const VistaPreviaImagen: React.FC<Props> = ({
  src,
  alt = "Imagen",
  onRemove,
}) => (
  <div className="relative group w-32 h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    {onRemove && (
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 bg-white/80 text-red-600 rounded-full p-1 hover:bg-red-100 transition"
        title="Eliminar imagen"
      >
        <FaTimes size={12} />
      </button>
    )}
  </div>
);

export default VistaPreviaImagen;
