type Props = {
  activo?: boolean;
  deshabilitado?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const BotonPagina: React.FC<Props> = ({
  activo = false,
  deshabilitado = false,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    disabled={deshabilitado}
    className={`w-8 h-8 rounded-full text-sm font-medium transition ${
      activo
        ? "bg-udlaverso-verde text-white"
        : "border text-udlaverso-gris hover:bg-gray-100"
    } disabled:opacity-50`}
  >
    {children}
  </button>
);

export default BotonPagina;
