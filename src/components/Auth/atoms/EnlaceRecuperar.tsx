import { Link } from "react-router-dom";

export const EnlaceRecuperar: React.FC = () => (
  <Link
    to="/recuperar"
    className="text-sm text-udlaverso-verde hover:text-udlaverso-verdeOscuro text-right w-full"
  >
    ¿Olvidaste la contraseña?
  </Link>
);
