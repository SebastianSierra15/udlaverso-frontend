import { useState } from "react";
import InputTexto from "../atoms/InputTexto";
import EnlaceRecuperar from "../atoms/EnlaceRecuperar";
import BotonesLogin from "./BotonesLogin";

const FormularioLogin: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ usuario, contrasena });
  };

  return (
    <form onSubmit={manejarEnvio} className="flex flex-col gap-4 w-full">
      <InputTexto
        etiqueta="Usuario o email"
        valor={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <div className="flex flex-col gap-1">
        <InputTexto
          etiqueta="Contraseña"
          tipo="password"
          valor={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <EnlaceRecuperar />
      </div>

      <BotonesLogin />
    </form>
  );
};

export default FormularioLogin;
