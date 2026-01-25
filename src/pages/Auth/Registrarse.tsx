import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import type { RegistroForm } from "../../types";
import { useRegistro } from "../../hooks";
import { TarjetaRegistro } from "../../components/Auth";
import { AlertaEmergente } from "../../components/Shared";

export const Registrarse: React.FC = () => {
  const navigate = useNavigate();
  const { registrar, loading } = useRegistro();
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const mostrarAlerta = (
    mensaje: string,
    tipo: "error" | "success" | "info" | "warning" = "info",
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
      <Helmet>
        <title>Registrarse - UdlaVerso</title>
        <meta
          name="description"
          content="Crea tu cuenta en el portal UdlaVerso y explora los proyectos de Realidad Aumentada de la Universidad de la Amazonia."
        />
      </Helmet>

      <section className="relative flex items-center justify-center min-h-screen px-6 md:px-20">
        <img
          src="/images/hero.webp"
          alt="Fondo UdlaVerso"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <div className="flex justify-center items-center w-full max-w-7xl">
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
