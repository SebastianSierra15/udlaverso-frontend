import Boton from "../../Shared/atoms/Boton";
import { Link } from "react-router-dom";

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
  textoBotonPrincipal = "Descargar visor",
  linkBotonPrincipal = "/descargas",
  textoBotonSecundario = "Conoce más",
  linkBotonSecundario = "/proyectos",
}) => {
  return (
    <div className="text-center px-6 md:px-10 max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
        {titulo}
      </h1>

      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
        {descripcion}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to={linkBotonPrincipal}>
          <Boton
            texto={textoBotonPrincipal}
            variante="principal"
            modo="light"
            claseExtra="px-8 py-3 shadow-md hover:shadow-lg"
          />
        </Link>

        <Link to={linkBotonSecundario}>
          <Boton
            texto={textoBotonSecundario}
            variante="secundario"
            modo="light"
            claseExtra="px-8 py-3 shadow-md hover:shadow-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContenidoHero;
