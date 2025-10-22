import ContenidoHero from "../../Shared/molecules/ContenidoHero";

interface HeroSectionProps {
  titulo: string;
  descripcion: string;
  imagenFondo: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titulo,
  descripcion,
  imagenFondo,
}) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden text-white">
      <img
        src={imagenFondo}
        alt="Fondo UdlaVerso"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 -z-10" />

      <ContenidoHero titulo={titulo} descripcion={descripcion} />
    </section>
  );
};

export default HeroSection;
