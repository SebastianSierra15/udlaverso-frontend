import { Helmet } from "react-helmet-async";
import TarjetaLogin from "../../components/Auth/organisms/TarjetaLogin";

const Login: React.FC = () => {
  return (
    <>
      {/* Metadatos */}
      <Helmet>
        <title>Iniciar sesión - UdlaVerso</title>
        <meta
          name="description"
          content="Accede al portal institucional UdlaVerso de la Universidad de la Amazonia."
        />
      </Helmet>

      <section className="relative flex items-center justify-end min-h-screen px-6 md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="flex justify-center md:justify-end w-full max-w-7xl">
          <TarjetaLogin />
        </div>
      </section>
    </>
  );
};

export default Login;
