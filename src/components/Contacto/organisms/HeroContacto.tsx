import ContenidoHero from "../../Acerca/molecules/ContenidoHero";

const HeroContacto: React.FC = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-white">
    <img
      src="/images/caseta.webp"
      alt="Contacto UdlaVerso"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div className="absolute inset-0 bg-black/60 -z-10" />

    <ContenidoHero
      titulo="Contáctanos"
      descripcion="Comunícate con el equipo del UdlaVerso o con la Universidad de la Amazonia para más información."
    />
  </section>
);

export default HeroContacto;
