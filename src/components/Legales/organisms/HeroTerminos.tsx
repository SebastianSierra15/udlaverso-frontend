import { ImagenHeroTerminos } from "../atoms";
import { ContenidoHeroTerminos } from "../molecules";

export const HeroTerminos: React.FC = () => (
  <section className="relative h-[300px] md:h-[380px] flex items-center justify-center">
    <ImagenHeroTerminos />
    <ContenidoHeroTerminos />
  </section>
);
