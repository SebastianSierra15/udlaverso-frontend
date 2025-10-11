import React from "react";
import Estrella from "../atoms/Estrella";

interface EstrellasValoracionProps {
  valor: number;
  onChange?: (nuevoValor: number) => void;
  grande?: boolean;
  interactiva?: boolean;
}

const EstrellasValoracion: React.FC<EstrellasValoracionProps> = ({
  valor,
  onChange,
  grande = false,
  interactiva = true,
}) => {
  const estrellas = Array.from({ length: 5 }, (_, i) => i < valor);

  return (
    <div className="flex">
      {estrellas.map((activa, i) => (
        <Estrella
          key={i}
          activa={activa}
          grande={grande}
          interactiva={interactiva}
          onClick={() => interactiva && onChange && onChange(i + 1)}
        />
      ))}
    </div>
  );
};

export default EstrellasValoracion;
