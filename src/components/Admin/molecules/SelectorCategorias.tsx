import React, { useState } from "react";
import EtiquetaSeleccion from "../atoms/EtiquetaSeleccion";

type Props = {
  label?: string;
  tooltip?: string;
  categoriasDisponibles: string[];
  categoriasSeleccionadas: string[];
  onChange: (nuevas: string[]) => void;
  maxCategorias?: number;
};

const SelectorCategorias: React.FC<Props> = ({
  label = "Categorías del proyecto *",
  tooltip,
  categoriasDisponibles,
  categoriasSeleccionadas,
  onChange,
  maxCategorias,
}) => {
  const [categoria, setCategoria] = useState("");

  const agregarCategoria = (nueva: string) => {
    if (
      nueva &&
      !categoriasSeleccionadas.includes(nueva) &&
      (!maxCategorias || categoriasSeleccionadas.length < maxCategorias)
    ) {
      onChange([...categoriasSeleccionadas, nueva]);
    }
  };

  const eliminarCategoria = (cat: string) => {
    onChange(categoriasSeleccionadas.filter((c) => c !== cat));
  };

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
        {label}
        <span className="text-xs text-gray-500">(selecciona una o más)</span>
        {tooltip && (
          <span
            title={tooltip}
            className="text-udlaverso-verde cursor-help text-sm"
          >
            ⓘ
          </span>
        )}
      </label>

      <select
        value={categoria}
        onChange={(e) => {
          agregarCategoria(e.target.value);
          setCategoria("");
        }}
        className="w-full border rounded-lg px-3 py-2 focus:ring-udlaverso-verde focus:border-udlaverso-verde outline-none"
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

      {maxCategorias && categoriasSeleccionadas.length >= maxCategorias && (
        <p className="text-xs text-udlaverso-gris mt-1">
          Límite máximo de {maxCategorias} categorías alcanzado.
        </p>
      )}

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
