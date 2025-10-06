import Boton from "../../Shared/atoms/Boton";
import { Link } from "react-router-dom";

const BotonesLogin: React.FC = () => (
  <div className="flex flex-col gap-5 mt-6 w-full">
    <Link to="/" className="w-full">
      <Boton texto="Iniciar sesión" variante="principal" claseExtra="w-full" />
    </Link>

    {/* Separador */}
    <div className="flex items-center justify-center w-full gap-2 text-udlaverso-negro">
      <span className="flex-1 h-px bg-udlaverso-negro"></span>
      <span className="text-xs font-semibold">o</span>
      <span className="flex-1 h-px bg-udlaverso-negro"></span>
    </div>

    <Link to="/registrarse" className="w-full">
      <Boton texto="Registrarse" variante="alternativo" claseExtra="w-full" />
    </Link>
  </div>
);

export default BotonesLogin;
