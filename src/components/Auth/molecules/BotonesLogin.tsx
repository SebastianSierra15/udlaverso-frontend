import { Link } from "react-router-dom";
import { Boton } from "../../Shared";

interface Props {
  loading?: boolean;
}

export const BotonesLogin: React.FC<Props> = ({ loading }) => (
  <div className="flex flex-col gap-5 mt-6 w-full">
    {/* Botón principal */}
    <Boton
      texto="Iniciar sesión"
      cargando={loading}
      claseExtra="w-full"
      tipo="submit"
      deshabilitado={loading}
    />

    {/* Separador */}
    <div className="flex items-center justify-center w-full gap-2 text-udlaverso-negro">
      <span className="flex-1 h-px bg-udlaverso-negro"></span>
      <span className="text-xs font-semibold">o</span>
      <span className="flex-1 h-px bg-udlaverso-negro"></span>
    </div>

    {/* Botón de registro */}
    <Link to="/registrarse" className="w-full">
      <Boton texto="Registrarse" variante="alternativo" claseExtra="w-full" />
    </Link>
  </div>
);
