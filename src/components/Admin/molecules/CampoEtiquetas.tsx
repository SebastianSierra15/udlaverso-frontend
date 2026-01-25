import { useState } from "react";
import { EtiquetaSeleccion, TooltipInfo } from "../atoms";

type Props = {
  label: string;
  placeholder?: string;
  tooltip?: string;
  valores: string[];
  onChange: (valores: string[]) => void;
  maxEtiquetas?: number;
  obligatorio?: boolean;
};

export const CampoEtiquetas: React.FC<Props> = ({
  label,
  placeholder,
  tooltip,
  valores,
  onChange,
  maxEtiquetas = 5,
  obligatorio = false,
}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const agregarEtiqueta = (valor: string) => {
    const limpio = valor.trim();
    if (limpio && !valores.includes(limpio)) {
      if (valores.length < maxEtiquetas) {
        onChange([...valores, limpio]);
        setError("");
      } else {
        setError(`Máximo ${maxEtiquetas} etiquetas permitidas.`);
      }
    }
    setInput("");
  };

  const eliminarEtiqueta = (valor: string) => {
    const nuevas = valores.filter((v) => v !== valor);
    onChange(nuevas);
    if (obligatorio && nuevas.length === 0) {
      setError("Debes ingresar al menos una etiqueta.");
    }
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
        {obligatorio && <span className="text-red-500">*</span>}
      </label>

      <div
        className={`border rounded-lg p-2 flex flex-wrap gap-2 min-h-[42px] ${
          error ? "border-red-500" : ""
        }`}
      >
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

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};
