import { useNavigate } from "react-router-dom";
import { SeccionError } from "../../components/Error";

export const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SeccionError
      tipo="404"
      titulo="Página no encontrada"
      descripcion="Lo sentimos, la página que buscas no existe."
      botonTexto="Volver al inicio"
      onClick={() => navigate("/")}
    />
  );
};
