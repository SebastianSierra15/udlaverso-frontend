import InputTexto from "../atoms/InputTexto";
import EnlaceRecuperar from "../atoms/EnlaceRecuperar";
import BotonesLogin from "./BotonesLogin";

interface Props {
  correo: string;
  contrasenia: string;
  setCorreo: (v: string) => void;
  setContrasenia: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const FormularioLogin: React.FC<Props> = ({
  correo,
  contrasenia,
  setCorreo,
  setContrasenia,
  onSubmit,
  loading,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
      <InputTexto
        etiqueta="Correo electrónico"
        tipo="email"
        valor={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="ejemplo@udla.edu.co"
        requerido
      />

      <div className="flex flex-col gap-1">
        <InputTexto
          etiqueta="Contraseña"
          tipo="password"
          valor={contrasenia}
          onChange={(e) => setContrasenia(e.target.value)}
          placeholder="Tu contraseña"
          requerido
        />

        <EnlaceRecuperar />
      </div>

      <BotonesLogin loading={loading} />
    </form>
  );
};

export default FormularioLogin;
