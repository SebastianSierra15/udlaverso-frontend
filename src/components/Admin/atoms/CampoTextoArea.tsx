import TooltipInfo from "./Tooltip";
import { useState } from "react";

type Props = {
  label: string;
  placeholder?: string;
  maxLength?: number;
  filas?: number;
  value: string;
  onChange: (v: string) => void;
  tooltip?: string;
  obligatorio?: boolean;
};

const CampoTextoArea: React.FC<Props> = ({
  label,
  placeholder,
  maxLength,
  filas = 4,
  value,
  onChange,
  tooltip,
  obligatorio = false,
}) => {
  const [error, setError] = useState("");

  const manejarCambio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value;
    if (maxLength && val.length > maxLength) val = val.slice(0, maxLength);

    onChange(val);

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

      <textarea
        value={value}
        onChange={manejarCambio}
        placeholder={placeholder}
        rows={filas}
        maxLength={maxLength}
        required={obligatorio}
        className={`w-full border rounded-lg px-3 py-2 resize-none outline-none focus:ring-udlaverso-verde focus:border-udlaverso-verde ${
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

export default CampoTextoArea;
