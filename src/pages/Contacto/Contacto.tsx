import { Helmet } from "react-helmet-async";
import { HeroContacto, SeccionInfoContacto } from "../../components/Contacto";

export const Contacto: React.FC = () => {
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
