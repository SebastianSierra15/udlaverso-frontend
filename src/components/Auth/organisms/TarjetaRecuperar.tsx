import { Link } from "react-router-dom";
import FormularioRecuperar from "../molecules/FormularioRecuperar";

const TarjetaRecuperar: React.FC = () => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-8">
      <Link to="/" className="mb-6">
        <img
          src="/logos/logo.png"
          alt="Logo UdlaVerso"
          title="Udlaverso"
          className="w-32 max-w-full hover:scale-105 transition-transform duration-300"
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
