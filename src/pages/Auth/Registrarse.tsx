import { Helmet } from "react-helmet-async";
import TarjetaRegistro from "../../components/Auth/organisms/TarjetaRegistro";

const Registrarse: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Registrarse - UdlaVerso</title>
        <meta
          name="description"
          content="Crea tu cuenta en el portal UdlaVerso y explora los proyectos de Realidad Aumentada de la Universidad de la Amazonia."
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
          <TarjetaRegistro />
        </div>
      </section>
    </>
  );
};

export default Registrarse;
