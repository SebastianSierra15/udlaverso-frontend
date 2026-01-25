import { ContenidoHero } from "../../Shared";

interface Props {
  titulo: string;
  descripcion: string;
  imagenFondo?: string;
}

export const HeroProyectoIndividual: React.FC<Props> = ({
  titulo,
  descripcion,
  imagenFondo = "/images/hero.webp",
}) => (
  <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white">
    <img
      src={imagenFondo}
      alt={titulo}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60 -z-10" />

    <ContenidoHero titulo={titulo} descripcion={descripcion} />
  </section>
);
