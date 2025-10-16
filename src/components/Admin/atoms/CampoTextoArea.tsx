import TooltipInfo from "./Tooltip";

type Props = {
  label: string;
  placeholder?: string;
  maxLength?: number;
  filas?: number;
  value: string;
  onChange: (v: string) => void;
  tooltip?: string;
};

const CampoTextoArea: React.FC<Props> = ({
  label,
  placeholder,
  maxLength,
  filas = 4,
  value,
  onChange,
  tooltip,
}) => (
  <div>
    <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
      {label}
      {tooltip && <TooltipInfo texto={tooltip} />}
    </label>

    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={filas}
      maxLength={maxLength}
      className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-udlaverso-verde focus:border-udlaverso-verde outline-none"
    />

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

export default CampoTextoArea;
