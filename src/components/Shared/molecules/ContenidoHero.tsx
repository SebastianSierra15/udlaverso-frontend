interface ContenidoHeroProps {
  titulo: string;
  descripcion: string;
}

const ContenidoHero: React.FC<ContenidoHeroProps> = ({
  titulo,
  descripcion,
}) => {
  return (
    <div className="text-center px-4 sm:px-6 md:px-10 max-w-5xl z-10 pt-16 md:pt-10">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
        {titulo}
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
};

export default ContenidoHero;
