import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import TarjetaLogin from "../../components/Auth/organisms/TarjetaLogin";
import AlertaEmergente from "../../components/Shared/atoms/AlertaEmergente";
import { STORAGE_KEYS } from "../../constants";
import { ROUTES } from "../../routes";

const Login: React.FC = () => {
  const { login, loading, error } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const rol = localStorage.getItem(STORAGE_KEYS.role);
    if (rol) {
      if (rol.toLowerCase() === "administrador") navigate(ROUTES.admin);
      else navigate(ROUTES.home);
    }
  }, []);

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    const exito = await login(correo, contrasenia);

    if (!exito) {
      setMostrarAlerta(true);
      return;
    }

    const rol = localStorage.getItem(STORAGE_KEYS.role);

    if (rol?.toLowerCase() === "administrador") {
      navigate(ROUTES.admin);
    } else {
      navigate(ROUTES.home);
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar sesión - UdlaVerso</title>
        <meta
          name="description"
          content="Accede al portal institucional UdlaVerso de la Universidad de la Amazonia."
        />
      </Helmet>

      <section className="relative flex items-center justify-end min-h-screen px-6 md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="flex justify-center md:justify-end w-full max-w-7xl">
          <TarjetaLogin
            correo={correo}
            contrasenia={contrasenia}
            setCorreo={setCorreo}
            setContrasenia={setContrasenia}
            onSubmit={manejarEnvio}
            loading={loading}
          />
        </div>
      </section>

      <AlertaEmergente
        mensaje={error || "Credenciales incorrectas"}
        tipo="error"
        visible={mostrarAlerta && !!error}
        onClose={() => setMostrarAlerta(false)}
      />
    </>
  );
};

export default Login;
