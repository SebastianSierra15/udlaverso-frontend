import { useState, useEffect } from "react";
import SEO from "../../components/SEO/SEO";
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
  }, [navigate]);

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
      <SEO
        title="Iniciar sesión | UdlaVerso"
        description="Accede al portal institucional UdlaVerso de la Universidad de la Amazonia."
        path="/login"
        noindex
      />

      <section className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 md:justify-end md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="flex w-full max-w-7xl justify-center md:justify-end">
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
