import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useRegistro } from "../../hooks/useRegistro";
import TarjetaRegistro from "../../components/Auth/organisms/TarjetaRegistro";
import AlertaEmergente from "../../components/Shared/atoms/AlertaEmergente";

const Registrarse: React.FC = () => {
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

  const handleRegistro = async (form: Record<string, any>) => {
    const resultado = await registrar(form);
    if (resultado.success) {
      mostrarAlerta("✅ Registro exitoso. Redirigiendo...", "success");
      setTimeout(() => (window.location.href = "/login"), 2500);
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

      {/* ALERTA GLOBAL */}
      <AlertaEmergente
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        visible={alerta.visible}
        onClose={() => setAlerta({ ...alerta, visible: false })}
      />

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
    </>
  );
};

export default Registrarse;
