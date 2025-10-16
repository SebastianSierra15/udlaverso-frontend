type Props = {
  valor: number;
  onChange: (v: number) => void;
  nombreEntidad?: string;
};

const SelectorCantidad: React.FC<Props> = ({
  valor,
  onChange,
  nombreEntidad = "registros",
}) => (
  <div className="flex items-center gap-2 text-sm text-udlaverso-gris">
    <span>Mostrar</span>
    <select
      value={valor}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border rounded-md px-2 py-1 text-sm focus:ring-udlaverso-verde outline-none"
    >
      {[5, 10, 20].map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
    <span>{nombreEntidad} por página</span>
  </div>
);

export default SelectorCantidad;
