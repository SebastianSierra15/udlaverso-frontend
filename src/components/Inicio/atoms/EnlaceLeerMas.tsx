import { Link } from "react-router-dom";

interface Props {
  ruta?: string;
}

const EnlaceLeerMas: React.FC<Props> = ({ ruta = "/noticias" }) => {
  return (
    <div className="text-right mt-2">
      <Link
        to={ruta}
        className="text-udlaverso-verde font-semibold text-sm hover:text-udlaverso-verdeClaro hover:underline transition-colors"
      >
        Leer más
      </Link>
    </div>
  );
};

export default EnlaceLeerMas;
