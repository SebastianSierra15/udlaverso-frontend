import { BotonAdmin } from "../atoms";

type Props = {
  onNuevo?: () => void;
  onBuscar: (v: string) => void;
  placeholder?: string;
  valor?: string;
};

export const BarraAcciones: React.FC<Props> = ({
  onNuevo,
  onBuscar,
  placeholder = "Buscar...",
  valor = "",
}) => {
  const manejarNuevo = () => {
    if (onNuevo) {
      onNuevo();
      return;
    }

    console.warn("⚠️ No se definió onNuevo, no se realiza navegación.");
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <div className="flex-1">
        <input
          type="text"
          value={valor}
          onChange={(e) => onBuscar(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-udlaverso-verde outline-none"
        />
      </div>

      <BotonAdmin
        texto="Nuevo"
        onClick={manejarNuevo}
        variante="principal"
        claseExtra="w-full sm:w-auto"
      />
    </div>
  );
};
