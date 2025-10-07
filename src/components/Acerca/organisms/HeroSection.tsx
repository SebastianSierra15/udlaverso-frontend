import ContenidoHero from "../molecules/ContenidoHero";

interface HeroSectionProps {
  titulo: string;
  descripcion: string;
  imagenFondo: string;
  textoBotonPrincipal?: string;
  linkBotonPrincipal?: string;
  textoBotonSecundario?: string;
  linkBotonSecundario?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titulo,
  descripcion,
  imagenFondo,
  textoBotonPrincipal,
  linkBotonPrincipal,
  textoBotonSecundario,
  linkBotonSecundario,
}) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden text-white">
      <img
        src={imagenFondo}
        alt="Fondo UdlaVerso"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 -z-10" />

      <ContenidoHero
        titulo={titulo}
        descripcion={descripcion}
        textoBotonPrincipal={textoBotonPrincipal}
        linkBotonPrincipal={linkBotonPrincipal}
        textoBotonSecundario={textoBotonSecundario}
        linkBotonSecundario={linkBotonSecundario}
      />
    </section>
  );
};

export default HeroSection;
