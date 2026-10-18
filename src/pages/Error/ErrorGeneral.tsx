import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import SeccionError from "../../components/Error/organisms/SeccionError";

const ErrorGeneral: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="Error | UdlaVerso" noindex path="/error" />
      <SeccionError
        tipo="error"
        titulo="Ha ocurrido un error"
        descripcion="Algo salió mal en el servidor o en la conexión. Intenta de nuevo más tarde."
        botonTexto="Volver al inicio"
        onClick={() => navigate("/")}
      />
    </>
  );
};

export default ErrorGeneral;
