import Boton from "../../Shared/atoms/Boton";

type Props = {
  onNuevo: () => void;
  onBuscar: (v: string) => void;
  placeholder?: string;
};

const BarraAcciones: React.FC<Props> = ({
  onNuevo,
  onBuscar,
  placeholder = "Buscar...",
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <div className="flex-1">
        <input
          type="text"
          onChange={(e) => onBuscar(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-udlaverso-verde outline-none"
        />
      </div>
      <Boton texto="Nuevo" variante="principal" claseExtra="w-full sm:w-auto" />
      <button onClick={onNuevo} className="hidden" aria-hidden />
    </div>
  );
};

export default BarraAcciones;
