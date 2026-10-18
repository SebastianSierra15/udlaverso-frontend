import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import SeccionError from "../../components/Error/organisms/SeccionError";

const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="Página no encontrada | UdlaVerso" noindex path="/error" />
      <SeccionError
        tipo="404"
        titulo="Página no encontrada"
        descripcion="Lo sentimos, la página que buscas no existe."
        botonTexto="Volver al inicio"
        onClick={() => navigate("/")}
      />
    </>
  );
};

export default Error404;
