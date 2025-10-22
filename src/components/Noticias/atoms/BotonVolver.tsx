import { Link } from "react-router-dom";

interface Props {
  to: string;
  texto?: string;
}

const BotonVolver: React.FC<Props> = ({ to, texto = "← Volver" }) => {
  return (
    <Link
      to={to}
      className="inline-block px-6 py-3 border-2 border-udlaverso-verde text-udlaverso-verde font-semibold rounded-full hover:bg-udlaverso-verde hover:text-white transition-all duration-300"
    >
      {texto}
    </Link>
  );
};

export default BotonVolver;
