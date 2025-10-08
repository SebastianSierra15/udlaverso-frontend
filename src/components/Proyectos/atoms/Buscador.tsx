import { FaSearch } from "react-icons/fa";

interface Props {
  valor: string;
  onChange: (valor: string) => void;
  placeholder?: string;
}

const Buscador: React.FC<Props> = ({
  valor,
  onChange,
  placeholder = "Buscar proyecto...",
}) => {
  return (
    <div className="relative w-full sm:w-64">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-udlaverso-verde focus:border-udlaverso-verde transition-all"
      />
    </div>
  );
};

export default Buscador;
