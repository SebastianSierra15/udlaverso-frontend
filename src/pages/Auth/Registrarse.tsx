import { useState } from "react";
import SEO from "../../components/SEO/SEO";
import { useNavigate } from "react-router-dom";
import { useRegistro } from "../../hooks/useRegistro";
import TarjetaRegistro from "../../components/Auth/organisms/TarjetaRegistro";
import AlertaEmergente from "../../components/Shared/atoms/AlertaEmergente";
import type { RegistroForm } from "../../types/RegistroForm.type";

const Registrarse: React.FC = () => {
  const navigate = useNavigate();
  const { registrar, loading } = useRegistro();
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const mostrarAlerta = (
    mensaje: string,
    tipo: "error" | "success" | "info" | "warning" = "info"
  ) => {
    setAlerta({ visible: true, mensaje, tipo });
  };

  const handleRegistro = async (form: RegistroForm) => {
    const resultado = await registrar(form);
    if (resultado.success) {
      mostrarAlerta("Registro exitoso. Redirigiendo...", "success");

      document.body.style.pointerEvents = "none";

      setTimeout(() => {
        document.body.style.pointerEvents = "auto";
        navigate("/login");
      }, 2000);
    } else {
      mostrarAlerta(resultado.mensaje, "error");
    }
  };

  return (
    <>
      <SEO
        title="Crear cuenta | UdlaVerso"
        description="Crea tu cuenta en el portal UdlaVerso y explora los proyectos de realidad aumentada de la Universidad de la Amazonia."
        path="/registrarse"
        noindex
      />

      <section className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <div className="flex w-full max-w-7xl items-center justify-center">
          <TarjetaRegistro onSubmit={handleRegistro} loading={loading} />
        </div>
      </section>

      <AlertaEmergente
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        visible={alerta.visible}
        onClose={() => setAlerta({ ...alerta, visible: false })}
      />
    </>
  );
};

export default Registrarse;
