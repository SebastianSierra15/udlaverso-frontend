import SEO from "../../components/SEO/SEO";
import HeroContacto from "../../components/Contacto/organisms/HeroContacto";
import SeccionInfoContacto from "../../components/Contacto/organisms/SeccionInfoContacto";

const Contacto: React.FC = () => {
  return (
    <>
      <SEO
        title="Contacto | UdlaVerso y Universidad de la Amazonia"
        description="Ponte en contacto con el equipo de UdlaVerso o la Universidad de la Amazonia. Encuentra aquí dirección, correo y horarios de atención."
        path="/contacto"
        keywords="contacto UdlaVerso, Universidad de la Amazonia, Florencia Caquetá"
      />

      <HeroContacto />

      <SeccionInfoContacto />
    </>
  );
};

export default Contacto;
