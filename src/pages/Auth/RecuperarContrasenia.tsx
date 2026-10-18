import SEO from "../../components/SEO/SEO";
import TarjetaRecuperar from "../../components/Auth/organisms/TarjetaRecuperar";

const RecuperarContrasenia: React.FC = () => {
  return (
    <>
      <SEO
        title="Recuperar contraseña | UdlaVerso"
        description="Recupera tu contraseña de acceso al portal UdlaVerso de la Universidad de la Amazonia."
        path="/recuperar"
        noindex
      />

      <section className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="flex w-full max-w-7xl items-center justify-center">
          <TarjetaRecuperar />
        </div>
      </section>
    </>
  );
};

export default RecuperarContrasenia;
