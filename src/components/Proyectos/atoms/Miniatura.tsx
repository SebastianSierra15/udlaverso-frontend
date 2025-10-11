interface Props {
  src: string;
  activa: boolean;
  onClick: () => void;
}

const Miniatura: React.FC<Props> = ({ src, activa, onClick }) => (
  <img
    src={src}
    alt="Miniatura"
    onClick={onClick}
    draggable={false}
    className={`w-20 h-20 object-cover rounded-lg border-2 transition-all flex-shrink-0 select-none cursor-pointer ${
      activa
        ? "border-udlaverso-verde shadow-lg scale-105"
        : "border-transparent hover:border-udlaverso-verde/50"
    }`}
  />
);

export default Miniatura;
