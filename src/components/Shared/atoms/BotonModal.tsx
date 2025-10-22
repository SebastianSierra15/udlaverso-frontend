interface Props {
  texto: string;
  variante?: "principal" | "secundario";
  onClick?: () => void;
  tipo?: "button" | "submit";
}

const BotonModal: React.FC<Props> = ({
  texto,
  variante = "principal",
  onClick,
  tipo = "button",
}) => {
  const base =
    "px-5 py-2 rounded-xl text-sm font-medium transition focus:outline-none";
  const estilos =
    variante === "principal"
      ? "bg-udlaverso-verde text-white hover:bg-udlaverso-verdeClaro"
      : "text-udlaverso-gris border border-gray-300 hover:bg-gray-100";

  return (
    <button type={tipo} onClick={onClick} className={`${base} ${estilos}`}>
      {texto}
    </button>
  );
};

export default BotonModal;
