import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegistro } from "../../../hooks/useRegistro";
import CheckboxTerminos from "../atoms/CheckboxTerminos";
import Boton from "../../Shared/atoms/Boton";
import AlertaEmergente from "../../Shared/atoms/AlertaEmergente";
import CamposDatosPersonales from "../molecules/CamposDatosPersonales";
import CamposCorreo from "../molecules/CamposCorreo";
import CamposContrasenia from "../molecules/CamposContrasenia";
import VerificarCodigo from "./VerificarCodigo";
import type { RegistroForm } from "../../../types/RegistroForm.type";

interface Props {
  onSubmit: (form: RegistroForm) => void;
  loading?: boolean;
}

const FormularioRegistro: React.FC<Props> = ({ onSubmit }) => {
  const [cooldown, setCooldown] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

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

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    universidad: "",
    contrasena: "",
    confirmarContrasena: "",
    terminos: false,
    esInstitucional: false,
  });

  const {
    enviarCodigo,
    verificarCodigo,
    codigoEnviado,
    correoVerificado,
    mensaje,
    loading,
    registroExitoso,
  } = useRegistro();

  const handleEnviarCodigo = async () => {
    if (cooldown || loading) return;
    setCooldown(true);
    setTimeout(() => setCooldown(false), 5000);

    if (!form.correo) {
      mostrarAlerta("Debes ingresar un correo válido.", "warning");
      return;
    }
    const res = await enviarCodigo(
      form.esInstitucional ? `${form.correo}@udla.edu.co` : form.correo
    );
    mostrarAlerta(res.mensaje, res.success ? "success" : "error");
  };

  const handleVerificarCodigo = async (codigo: string) => {
    const res = await verificarCodigo(
      form.esInstitucional ? `${form.correo}@udla.edu.co` : form.correo,
      codigo
    );
    mostrarAlerta(res.mensaje, res.success ? "success" : "error");
  };

  const handleSubmit = async () => {
    if (bloqueado || loading) return;
    setBloqueado(true);

    try {
      if (form.contrasena !== form.confirmarContrasena) {
        mostrarAlerta("Las contraseñas no coinciden.", "error");
        return;
      }

      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^_])[A-Za-z\d@$!%*?&.#^_]{8,64}$/;

      if (!passwordRegex.test(form.contrasena)) {
        mostrarAlerta(
          "La contraseña debe tener entre 8 y 64 caracteres, con al menos una mayúscula, una minúscula, un número y un carácter especial.",
          "warning"
        );
        return;
      }

      if (
        !form.esInstitucional &&
        form.correo.toLowerCase().endsWith("@udla.edu.co")
      ) {
        mostrarAlerta(
          "Has ingresado un correo institucional, por favor marca la opción 'Pertenezco a la Universidad de la Amazonia' para continuar.",
          "warning"
        );
        return;
      }

      if (!form.terminos) {
        mostrarAlerta("Debes aceptar los términos y condiciones.", "warning");
        return;
      }

      await onSubmit(form);
    } catch (error) {
      console.error("Error al registrar:", error);
    } finally {
      setTimeout(() => setBloqueado(false), 1500);
    }
  };

  return (
    <>
      {/* Datos Personales */}
      {!codigoEnviado && !correoVerificado && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-4 w-full"
        >
          {/* Checkbox superior */}
          <div className="flex flex-col items-start gap-1">
            <label className="flex items-center gap-2 text-sm text-udlaverso-gris font-medium mt-1">
              <input
                type="checkbox"
                checked={form.esInstitucional}
                onChange={(e) => {
                  const esInstitucional = e.target.checked;
                  setForm({
                    ...form,
                    esInstitucional,
                    correo: esInstitucional
                      ? form.correo.replace(/@udla\.edu\.co$/, "")
                      : form.correo,
                  });
                }}
                className="accent-udlaverso-verde w-4 h-4"
              />
              Pertenezco a la Universidad de la Amazonia
            </label>
          </div>

          <CamposDatosPersonales form={form} setForm={setForm} />
          <CamposCorreo form={form} setForm={setForm} />

          <Boton
            texto="Enviar código de verificación"
            cargando={loading}
            variante="principal"
            tipo="button"
            onClick={handleEnviarCodigo}
            deshabilitado={loading}
          />

          <p className="text-sm text-center text-udlaverso-gris mt-2">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="text-udlaverso-verde hover:text-udlaverso-verdeClaro font-semibold"
            >
              Inicia sesión
            </Link>
          </p>
        </form>
      )}

      {/* Verificación del correo */}
      {codigoEnviado && !correoVerificado && (
        <VerificarCodigo
          correo={
            form.esInstitucional ? `${form.correo}@udla.edu.co` : form.correo
          }
          onVerificar={handleVerificarCodigo}
          onReenviar={handleEnviarCodigo}
          loading={loading}
          mensaje={mensaje}
        />
      )}

      {/* Contraseña y terminos y condiciones */}
      {correoVerificado && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
          <CamposContrasenia form={form} setForm={setForm} />

          <CheckboxTerminos
            acepto={form.terminos}
            onChange={(e) => setForm({ ...form, terminos: e.target.checked })}
          />

          <Boton
            texto="Crear cuenta"
            cargando={loading || bloqueado}
            variante="principal"
            tipo="button"
            onClick={handleSubmit}
            deshabilitado={loading || bloqueado || registroExitoso}
          />
        </form>
      )}

      {/* Alertas */}
      <AlertaEmergente
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        visible={alerta.visible}
        onClose={() => setAlerta((prev) => ({ ...prev, visible: false }))}
      />
    </>
  );
};

export default FormularioRegistro;
