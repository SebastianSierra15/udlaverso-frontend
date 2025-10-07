import { useState } from "react";
import InputFlotante from "../atoms/InputFlotante";
import Boton from "../../Shared/atoms/Boton";
import { Link } from "react-router-dom";

const FormularioRecuperar: React.FC = () => {
  const [correo, setCorreo] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Correo para recuperar:", correo);
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="flex flex-col gap-5 w-full text-center"
    >
      <p className="text-sm text-udlaverso-gris">
        Ingresa tu correo electrónico institucional para restablecer tu
        contraseña.
      </p>

      <InputFlotante
        id="correo"
        tipo="email"
        etiqueta="Correo electrónico"
        valor={correo}
        onChange={(e) => setCorreo(e.target.value)}
        requerido
      />

      <Boton texto="Enviar enlace de recuperación" variante="principal" />

      <p className="text-sm text-center text-udlaverso-gris mt-2">
        ¿Recordaste tu contraseña?{" "}
        <Link
          to="/login"
          className="text-udlaverso-verde hover:text-udlaverso-verdeClaro font-semibold"
        >
          Inicia sesión
        </Link>
      </p>
    </form>
  );
};

export default FormularioRecuperar;
