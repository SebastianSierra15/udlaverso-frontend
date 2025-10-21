import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

interface Props {
  children: React.ReactNode;
  permisosRequeridos?: string[];
}

const RutaProtegida: React.FC<Props> = ({ children, permisosRequeridos }) => {
  const { user, loadingUser } = useAuth();

  if (loadingUser) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (
    permisosRequeridos &&
    !user.permisos.some((p) => permisosRequeridos.includes(p.nombrePermiso))
  ) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RutaProtegida;
