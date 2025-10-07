import { Helmet } from "react-helmet-async";
import TarjetaRecuperar from "../../components/Auth/organisms/TarjetaRecuperar";

const RecuperarContrasenia: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Recuperar contraseña - UdlaVerso</title>
        <meta
          name="description"
          content="Recupera tu contraseña de acceso al portal UdlaVerso de la Universidad de la Amazonia."
        />
      </Helmet>

      <section className="relative flex items-center justify-center min-h-screen px-6 md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="flex justify-center items-center w-full max-w-7xl">
          <TarjetaRecuperar />
        </div>
      </section>
    </>
  );
};

export default RecuperarContrasenia;
