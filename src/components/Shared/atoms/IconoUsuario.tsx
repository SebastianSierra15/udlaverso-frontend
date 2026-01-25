import { FaUserCircle } from "react-icons/fa";

interface IconoUsuarioProps {
  color?: string;
  tamano?: string;
}

export const IconoUsuario: React.FC<IconoUsuarioProps> = ({
  color = "text-udlaverso-gris",
  tamano = "text-2xl",
}) => <FaUserCircle className={`${color} ${tamano}`} />;
