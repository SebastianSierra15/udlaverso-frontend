import ContenidoHero from "../../Shared/molecules/ContenidoHero";

interface Props {
  titulo: string;
  descripcion: string;
  imagenFondo?: string;
}

const HeroProyectoIndividual: React.FC<Props> = ({
  titulo,
  descripcion,
  imagenFondo = "/images/hero.webp",
}) => (
  <section className="relative min-h-[360px] h-[48vh] md:h-[55vh] flex items-center justify-center overflow-hidden text-white">
    <img
      src={imagenFondo}
      alt={titulo}
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60 -z-10" />

    <ContenidoHero titulo={titulo} descripcion={descripcion} />
  </section>
);

export default HeroProyectoIndividual;
