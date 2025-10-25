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

const CamposDatosPersonales: React.FC<Props> = ({ form, setForm }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <InputFlotante
      id="nombre"
      etiqueta="Nombres*"
      valor={form.nombre}
      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      requerido
      soloLetras
      maxLength={100}
    />
    <InputFlotante
      id="apellido"
      etiqueta="Apellidos*"
      valor={form.apellido}
      onChange={(e) => setForm({ ...form, apellido: e.target.value })}
      requerido
      soloLetras
      maxLength={100}
    />
  </div>
);

export default CamposDatosPersonales;
