import { useNavigate } from "react-router-dom";
import BotonAdmin from "../atoms/BotonAdmin";

type Props = {
  onNuevo?: () => void;
  onBuscar: (v: string) => void;
  placeholder?: string;
};

const BarraAcciones: React.FC<Props> = ({
  onNuevo,
  onBuscar,
  placeholder = "Buscar...",
}) => {
  const navigate = useNavigate();

  const manejarNuevo = () => {
    if (onNuevo) onNuevo();
    navigate("/admin/proyectos/nuevo-proyecto");
  };

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

      <BotonAdmin
        texto="Nuevo"
        onClick={manejarNuevo}
        variante="principal"
        claseExtra="w-full sm:w-auto"
      />
    </div>
  );
};

export default BarraAcciones;
