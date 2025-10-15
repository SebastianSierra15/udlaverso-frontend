type Props = { estado: "activo" | "borrador" | "inactivo" };

const colores: Record<Props["estado"], string> = {
  activo: "bg-green-100 text-green-700",
  borrador: "bg-yellow-100 text-yellow-700",
  inactivo: "bg-gray-100 text-gray-600",
};

const InsigniaEstado: React.FC<Props> = ({ estado }) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${colores[estado]}`}
  >
    {estado}
  </span>
);

export default InsigniaEstado;
