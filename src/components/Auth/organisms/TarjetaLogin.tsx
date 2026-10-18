import { Link } from "react-router-dom";
import FormularioLogin from "../molecules/FormularioLogin";

interface Props {
  correo: string;
  contrasenia: string;
  setCorreo: (v: string) => void;
  setContrasenia: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const TarjetaLogin: React.FC<Props> = ({
  correo,
  contrasenia,
  setCorreo,
  setContrasenia,
  onSubmit,
  loading,
}) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-8">
      <Link to="/" className="mb-4">
        <img
          src="/logos/logo.png"
          alt="Logo UdlaVerso"
          title="Udlaverso"
          className="w-32 max-w-full hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <FormularioLogin
        correo={correo}
        contrasenia={contrasenia}
        setCorreo={setCorreo}
        setContrasenia={setContrasenia}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default TarjetaLogin;
