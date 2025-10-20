import React, { useState } from "react";
import EtiquetaSeleccion from "../atoms/EtiquetaSeleccion";

type Props = {
  label?: string;
  tooltip?: string;
  categoriasDisponibles: string[];
  categoriasSeleccionadas: string[];
  onChange: (nuevas: string[]) => void;
  maxCategorias?: number;
  obligatorio?: boolean;
};

const SelectorCategorias: React.FC<Props> = ({
  label = "Categorías del proyecto *",
  tooltip,
  categoriasDisponibles,
  categoriasSeleccionadas,
  onChange,
  maxCategorias = 1,
  obligatorio = false,
}) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");

  const agregarCategoria = (nueva: string) => {
    if (
      nueva &&
      !categoriasSeleccionadas.includes(nueva) &&
      categoriasSeleccionadas.length < maxCategorias
    ) {
      onChange([...categoriasSeleccionadas, nueva]);
      setError("");
    } else if (categoriasSeleccionadas.length >= maxCategorias) {
      setError(`Solo puedes seleccionar ${maxCategorias} categoría.`);
    }
  };

  const eliminarCategoria = (cat: string) => {
    onChange(categoriasSeleccionadas.filter((c) => c !== cat));
    setError("Debe haber al menos una categoría seleccionada.");
  };

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
        {label}
        <span className="text-xs text-gray-500">(selecciona una)</span>
        {tooltip && (
          <span
            title={tooltip}
            className="text-udlaverso-verde cursor-help text-sm"
          >
            ⓘ
          </span>
        )}
        {obligatorio && <span className="text-red-500">*</span>}
      </label>

      <select
        value={categoria}
        onChange={(e) => {
          agregarCategoria(e.target.value);
          setCategoria("");
        }}
        required={obligatorio}
        className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-udlaverso-verde focus:border-udlaverso-verde ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">Selecciona una categoría</option>
        {categoriasDisponibles
          .filter((cat) => !categoriasSeleccionadas.includes(cat))
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}

      {categoriasSeleccionadas.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {categoriasSeleccionadas.map((cat) => (
            <EtiquetaSeleccion
              key={cat}
              texto={cat}
              onRemove={() => eliminarCategoria(cat)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorCategorias;
