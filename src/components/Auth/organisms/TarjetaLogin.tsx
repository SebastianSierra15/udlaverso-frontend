import { Link } from "react-router-dom";
import FormularioLogin from "../molecules/FormularioLogin";

const TarjetaLogin: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-10 w-[90%] max-w-md flex flex-col items-center">
      <Link to="/" className="mb-4">
        <img
          src="/logos/logo.png"
          alt="Logo UdlaVerso"
          title="Udlaverso"
          className="w-32 hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <FormularioLogin />
    </div>
  );
};

export default TarjetaLogin;
