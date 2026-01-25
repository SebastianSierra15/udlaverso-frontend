import { useState } from "react";
import { TooltipInfo } from "./Tooltip";

type Props = {
  label: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  onChange: (v: string) => void;
  tooltip?: string;
  obligatorio?: boolean;
  soloLetras?: boolean;
};

export const CampoTexto: React.FC<Props> = ({
  label,
  placeholder,
  maxLength,
  value,
  onChange,
  tooltip,
  obligatorio = false,
  soloLetras = false,
}) => {
  const [error, setError] = useState("");

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (soloLetras) {
      // solo letras (acentos y espacios)
      val = val.replace(/[^a-zA-ZÁÉÍÓÚáéíóúñÑ\s]/g, "");
    }

    if (maxLength && val.length > maxLength) {
      val = val.slice(0, maxLength);
    }

    onChange(val);

    // validación en tiempo real
    if (obligatorio && !val.trim()) {
      setError("Este campo es obligatorio");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
        {label}
        {tooltip && <TooltipInfo texto={tooltip} />}
        {obligatorio && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        value={value}
        onChange={manejarCambio}
        placeholder={placeholder}
        maxLength={maxLength}
        required={obligatorio}
        className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-udlaverso-verde focus:border-udlaverso-verde ${
          error ? "border-red-500" : ""
        }`}
      />

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}

      {maxLength && (
        <p
          className={`text-xs text-right mt-1 ${
            value.length >= maxLength ? "text-red-600" : "text-gray-500"
          }`}
        >
          {value.length} / {maxLength} caracteres
        </p>
      )}
    </div>
  );
};
