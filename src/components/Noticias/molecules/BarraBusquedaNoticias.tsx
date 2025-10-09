import { FaSearch } from "react-icons/fa";

interface Props {
  valor: string;
  onChange: (v: string) => void;
  orden: string;
  onOrdenar: (v: string) => void;
}

const BarraBusquedaNoticias: React.FC<Props> = ({
  valor,
  onChange,
  orden,
  onOrdenar,
}) => (
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/70 border border-gray-200 rounded-xl shadow-sm p-4">
    <div className="relative w-full sm:w-72">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar noticia..."
        className="w-full pl-10 pr-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-udlaverso-verde outline-none"
      />
    </div>

    <select
      value={orden}
      onChange={(e) => onOrdenar(e.target.value)}
      className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-udlaverso-verde outline-none"
    >
      <option value="desc">Más recientes</option>
      <option value="asc">Más antiguas</option>
    </select>
  </div>
);

export default BarraBusquedaNoticias;
