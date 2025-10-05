import { Link } from "react-router-dom";

interface Props {
  texto: string;
  ruta?: string;
}

const TituloNoticia: React.FC<Props> = ({ texto, ruta = "/noticias" }) => {
  return (
    <Link
      to={ruta}
      className="text-base font-semibold text-udlaverso-negro hover:underline transition-colors duration-300"
    >
      {texto}
    </Link>
  );
};

export default TituloNoticia;
