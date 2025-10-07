import { Link } from "react-router-dom";
import FormularioRecuperar from "../molecules/FormularioRecuperar";

const TarjetaRecuperar: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-10 w-[90%] max-w-md flex flex-col items-center">
      <Link to="/" className="mb-6">
        <img
          src="/logos/logo.png"
          alt="Logo UdlaVerso"
          className="w-32 hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <h2 className="text-2xl font-bold text-udlaverso-negro mb-6">
        Recuperar contraseña
      </h2>

      <FormularioRecuperar />
    </div>
  );
};

export default TarjetaRecuperar;
