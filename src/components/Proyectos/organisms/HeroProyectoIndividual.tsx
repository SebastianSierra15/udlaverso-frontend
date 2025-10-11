import ContenidoHero from "../../Acerca/molecules/ContenidoHero";

interface Props {
  titulo: string;
  descripcion: string;
  imagenFondo: string;
}

const HeroProyectoIndividual: React.FC<Props> = ({
  titulo,
  descripcion,
  imagenFondo,
}) => (
  <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white">
    <img
      src={imagenFondo}
      alt={titulo}
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div className="absolute inset-0 bg-black/60 -z-10" />
    <ContenidoHero titulo={titulo} descripcion={descripcion} />
  </section>
);

export default HeroProyectoIndividual;
