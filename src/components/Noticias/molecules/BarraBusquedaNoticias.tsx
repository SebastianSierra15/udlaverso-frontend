import { FaSearch } from "react-icons/fa";
import ContadorResultados from "../../Proyectos/atoms/ContadorResultados";

interface Props {
  total: number;
  busqueda: string;
  onBuscar: (valor: string) => void;
  orden: string;
  onOrdenar: (valor: string) => void;
}

const BarraBusquedaNoticias: React.FC<Props> = ({
  total,
  busqueda,
  onBuscar,
  orden,
  onOrdenar,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 md:px-5 md:py-3 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap">
      {/* Buscador */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full sm:w-auto">
        <div className="relative w-full sm:w-72">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => onBuscar(e.target.value)}
            placeholder="Buscar noticia..."
            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-udlaverso-verde focus:border-udlaverso-verde transition-all"
          />
        </div>

        {/* Selector de orden */}
        <select
          value={orden}
          onChange={(e) => onOrdenar(e.target.value)}
          className="px-3 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-udlaverso-verde"
        >
          <option value="desc">Más recientes</option>
          <option value="asc">Más antiguas</option>
        </select>
      </div>

      {/* Contador de resultados */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <ContadorResultados total={total} />
      </div>
    </div>
  );
};

export default BarraBusquedaNoticias;
