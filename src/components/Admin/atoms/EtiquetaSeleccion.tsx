import { FaTimes } from "react-icons/fa";

type Props = {
  texto: string;
  onRemove: () => void;
};

export const EtiquetaSeleccion: React.FC<Props> = ({ texto, onRemove }) => (
  <div className="flex items-center bg-udlaverso-verde/10 text-udlaverso-verde font-medium text-sm px-3 py-1 rounded-full gap-2">
    <span>{texto}</span>
    <button
      onClick={onRemove}
      className="text-udlaverso-verde hover:text-udlaverso-negro transition"
      title="Eliminar categoría"
    >
      <FaTimes size={12} />
    </button>
  </div>
);
