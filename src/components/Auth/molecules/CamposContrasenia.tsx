import type { Dispatch, SetStateAction } from "react";
import InputFlotante from "../atoms/InputFlotante";

interface Formulario {
  nombre: string;
  apellido: string;
  correo: string;
  universidad: string;
  contrasena: string;
  confirmarContrasena: string;
  terminos: boolean;
  esInstitucional: boolean;
}

interface Props {
  form: Formulario;
  setForm: Dispatch<SetStateAction<Formulario>>;
}

const CamposContrasenia: React.FC<Props> = ({ form, setForm }) => (
  <>
    <InputFlotante
      id="contrasena"
      etiqueta="Contraseña*"
      tipo="password"
      valor={form.contrasena}
      onChange={(e) => setForm({ ...form, contrasena: e.target.value })}
      requerido
      mostrarTogglePassword
      maxLength={64}
    />
    <InputFlotante
      id="confirmarContrasena"
      etiqueta="Confirmar contraseña*"
      tipo="password"
      valor={form.confirmarContrasena}
      onChange={(e) =>
        setForm({ ...form, confirmarContrasena: e.target.value })
      }
      requerido
      mostrarTogglePassword
      maxLength={64}
    />
  </>
);

export default CamposContrasenia;
