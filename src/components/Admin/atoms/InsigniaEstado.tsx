type Props = { estado: "activo" | "inactivo" };

const colores: Record<Props["estado"], string> = {
  activo: "bg-green-100 text-green-700",
  inactivo: "bg-red-100 text-red-600",
};

const InsigniaEstado: React.FC<Props> = ({ estado }) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${colores[estado]}`}
  >
    {estado}
  </span>
);

export default InsigniaEstado;
