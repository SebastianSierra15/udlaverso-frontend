import React, { useState } from "react";
import EtiquetaSeleccion from "../atoms/EtiquetaSeleccion";
import TooltipInfo from "../atoms/Tooltip";

type Props = {
  label: string;
  placeholder?: string;
  tooltip?: string;
  valores: string[];
  onChange: (valores: string[]) => void;
  maxEtiquetas?: number;
};

const CampoEtiquetas: React.FC<Props> = ({
  label,
  placeholder,
  tooltip,
  valores,
  onChange,
  maxEtiquetas,
}) => {
  const [input, setInput] = useState("");

  const agregarEtiqueta = (valor: string) => {
    const limpio = valor.trim();
    if (limpio && !valores.includes(limpio)) {
      if (!maxEtiquetas || valores.length < maxEtiquetas) {
        onChange([...valores, limpio]);
      }
    }
    setInput("");
  };

  const eliminarEtiqueta = (valor: string) => {
    onChange(valores.filter((v) => v !== valor));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      agregarEtiqueta(input);
    }
  };

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
        {label}
        {tooltip && <TooltipInfo texto={tooltip} />}
      </label>

      {maxEtiquetas && valores.length >= maxEtiquetas && (
        <p className="text-xs text-udlaverso-gris mt-1">
          Límite máximo de {maxEtiquetas} etiquetas alcanzado.
        </p>
      )}

      <div className="border rounded-lg p-2 flex flex-wrap gap-2 min-h-[42px]">
        {valores.map((v, i) => (
          <EtiquetaSeleccion
            key={i}
            texto={v}
            onRemove={() => eliminarEtiqueta(v)}
          />
        ))}

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 min-w-[150px] border-none focus:ring-0 outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default CampoEtiquetas;
