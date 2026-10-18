import ContenidoHero from "../../Shared/molecules/ContenidoHero";

const HeroNoticias: React.FC = () => (
  <section className="relative min-h-[360px] h-[48vh] md:h-[55vh] flex items-center justify-center text-white">
    <img
      src="/images/escenario.webp"
      alt="Noticias UdlaVerso"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div className="absolute inset-0 bg-black/60 -z-10" />

    <ContenidoHero
      titulo="Noticias del UdlaVerso"
      descripcion="Mantente informado sobre los avances, eventos y novedades tecnológicas del UDLAVERSO."
    />
  </section>
);

export default HeroNoticias;
