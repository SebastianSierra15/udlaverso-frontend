import React, { useState } from "react";
import EtiquetaSeleccion from "../atoms/EtiquetaSeleccion";
import TooltipInfo from "../atoms/Tooltip";

type Props = {
  label?: string;
  tooltip?: string;
  opciones: string[];
  seleccionadas: string[];
  onChange: (nuevas: string[]) => void;
  maxSeleccion?: number;
  obligatorio?: boolean;
  placeholder?: string;
};

const SelectorOpciones: React.FC<Props> = ({
  label = "Seleccionar opciones",
  tooltip,
  opciones,
  seleccionadas,
  onChange,
  maxSeleccion = 1,
  obligatorio = false,
  placeholder = "Selecciona una opción",
}) => {
  const [valor, setValor] = useState("");
  const [error, setError] = useState("");

  const agregarOpcion = (nueva: string) => {
    if (
      nueva &&
      !seleccionadas.includes(nueva) &&
      seleccionadas.length < maxSeleccion
    ) {
      onChange([...seleccionadas, nueva]);
      setError("");
    } else if (seleccionadas.length >= maxSeleccion) {
      setError(
        `Solo puedes seleccionar ${maxSeleccion} opción${
          maxSeleccion > 1 ? "es" : ""
        }.`
      );
    }
  };

  const eliminarOpcion = (opt: string) => {
    const nuevas = seleccionadas.filter((c) => c !== opt);
    onChange(nuevas);
    if (obligatorio && nuevas.length === 0) {
      setError("Debes seleccionar al menos una opción.");
    }
  };

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
        {label}
        {tooltip && <TooltipInfo texto={tooltip} />}
        {maxSeleccion > 1 && (
          <span className="text-xs text-gray-500">
            (selecciona hasta {maxSeleccion})
          </span>
        )}
        {obligatorio && <span className="text-red-500">*</span>}
      </label>

      <select
        value={valor}
        onChange={(e) => {
          agregarOpcion(e.target.value);
          setValor("");
        }}
        required={obligatorio}
        className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-udlaverso-verde focus:border-udlaverso-verde ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">{placeholder}</option>
        {opciones
          .filter((o) => o && !seleccionadas.includes(o))
          .map((o, index) => (
            <option key={`${o}-${index}`} value={o}>
              {o}
            </option>
          ))}
      </select>

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}

      {seleccionadas.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {seleccionadas.map((opt) => (
            <EtiquetaSeleccion
              key={opt}
              texto={opt}
              onRemove={() => eliminarOpcion(opt)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorOpciones;
