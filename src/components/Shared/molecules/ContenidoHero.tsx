interface ContenidoHeroProps {
  titulo: string;
  descripcion: string;
  textoBotonPrincipal?: string;
  linkBotonPrincipal?: string;
  textoBotonSecundario?: string;
  linkBotonSecundario?: string;
}

const ContenidoHero: React.FC<ContenidoHeroProps> = ({
  titulo,
  descripcion,
}) => {
  return (
    <div className="text-center px-6 md:px-10 max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
        {titulo}
      </h1>

      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
};

export default ContenidoHero;
