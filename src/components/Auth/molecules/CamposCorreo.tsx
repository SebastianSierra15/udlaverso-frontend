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

const CamposCorreo: React.FC<Props> = ({ form, setForm }) => (
  <>
    {!form.esInstitucional ? (
      <>
        <InputFlotante
          id="correo"
          etiqueta="Correo electrónico*"
          tipo="email"
          valor={form.correo}
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
          requerido
        />
        <InputFlotante
          id="universidad"
          etiqueta="Nombre de Universidad de procedencia*"
          valor={form.universidad}
          onChange={(e) => setForm({ ...form, universidad: e.target.value })}
          requerido
          maxLength={150}
        />
      </>
    ) : (
      <InputFlotante
        id="correoInstitucional"
        etiqueta="Correo institucional*"
        valor={form.correo}
        onChange={(e) => setForm({ ...form, correo: e.target.value })}
        requerido
        institucional
        deshabilitarArroba
      />
    )}
  </>
);

export default CamposCorreo;
