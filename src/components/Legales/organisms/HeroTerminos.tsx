import ImagenHeroTerminos from "../atoms/ImagenHeroTerminos";
import ContenidoHeroTerminos from "../molecules/ContenidoHeroTerminos";

const HeroTerminos: React.FC = () => (
  <section className="relative h-[300px] md:h-[380px] flex items-center justify-center">
    <ImagenHeroTerminos />
    <ContenidoHeroTerminos />
  </section>
);

export default HeroTerminos;
