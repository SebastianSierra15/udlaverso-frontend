import ContenidoHero from "../../Shared/molecules/ContenidoHero";

const HeroComoEmpezar: React.FC = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-white">
    <img
      src="/images/escenario.webp"
      alt="Cómo empezar en el UdlaVerso"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div className="absolute inset-0 bg-black/60 -z-10" />

    <ContenidoHero
      titulo="Cómo empezar en el UDLAVERSO"
      descripcion="Aprende a crear tu cuenta, configurar tu avatar y explorar las islas virtuales paso a paso con videos y ejemplos."
    />
  </section>
);

export default HeroComoEmpezar;
