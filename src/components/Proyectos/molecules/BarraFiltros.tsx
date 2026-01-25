import { FiltroSelect, Buscador, ContadorResultados } from "../atoms";
import { BotonEnlace } from "../../Shared";

interface Props {
  opciones: (string | { id: number; nombre: string })[];
  seleccion: string;
  onChange: (valor: string) => void;
  total: number;
  busqueda: string;
  onBuscar: (valor: string) => void;
}

export const BarraFiltros: React.FC<Props> = ({
  opciones,
  seleccion,
  onChange,
  total,
  busqueda,
  onBuscar,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 md:px-5 md:py-3 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full sm:w-auto">
        <FiltroSelect
          opciones={opciones}
          valor={seleccion}
          onChange={onChange}
        />

        <Buscador valor={busqueda} onChange={onBuscar} />
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <ContadorResultados total={total} />

        <BotonEnlace
          texto="Descargar visor"
          href="https://www.mediafire.com/file/yi7wyivkcffq3lb/UA3D-Viwer.exe"
          variante="principal"
        />
      </div>
    </div>
  );
};
