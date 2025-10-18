interface Props {
  label?: string;
  opciones: (string | { id: number; nombre: string })[];
  valor: string;
  onChange: (valor: string) => void;
}

const FiltroSelect: React.FC<Props> = ({
  label = "Categoría",
  opciones,
  valor,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-semibold text-udlaverso-negro">
        {label}
      </label>

      <select
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-udlaverso-verde"
        aria-label={label}
      >
        {opciones.map((op, i) =>
          typeof op === "string" ? (
            <option key={`opt-${i}`} value={op}>
              {op}
            </option>
          ) : (
            <option key={`${op.id}-${op.nombre}`} value={op.nombre}>
              {op.nombre}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default FiltroSelect;
