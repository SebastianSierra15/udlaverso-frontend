import React, { useState } from "react";
import EtiquetaSeleccion from "../atoms/EtiquetaSeleccion";
import TooltipInfo from "../atoms/Tooltip";

type Props = {
  label?: string;
  tooltip?: string;
  opciones: (string | { label: string; value: string })[];
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
    if (!nueva) return;

    if (seleccionadas.includes(nueva)) {
      setError("Esa opción ya fue seleccionada.");
      return;
    }

    if (seleccionadas.length >= maxSeleccion) {
      setError(
        `Solo puedes seleccionar ${maxSeleccion} opción${
          maxSeleccion > 1 ? "es" : ""
        }.`
      );
      return;
    }

    onChange([...seleccionadas, nueva]);
    setError("");
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
        {opciones.map((o, index) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;

          if (seleccionadas.includes(value)) return null;

          return (
            <option key={`${value}-${index}`} value={value}>
              {label}
            </option>
          );
        })}
      </select>

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}

      {seleccionadas.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {seleccionadas.map((opt) => {
            const encontrado = opciones.find((o) =>
              typeof o === "string" ? o === opt : o.value === opt
            );
            const label =
              typeof encontrado === "string"
                ? encontrado
                : encontrado?.label ?? opt;

            return (
              <EtiquetaSeleccion
                key={opt}
                texto={label}
                onRemove={() => eliminarOpcion(opt)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectorOpciones;
