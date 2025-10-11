import { Helmet } from "react-helmet-async";
import HeroContacto from "../../components/Contacto/organisms/HeroContacto";
import SeccionInfoContacto from "../../components/Contacto/organisms/SeccionInfoContacto";

const Contacto: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - UdlaVerso · Universidad de la Amazonia</title>
        <meta
          name="description"
          content="Ponte en contacto con el equipo de UdlaVerso o la Universidad de la Amazonia. Encuentra aquí dirección, correo y horarios de atención."
        />
      </Helmet>

      <HeroContacto />

      <SeccionInfoContacto />
    </>
  );
};

export default Contacto;
