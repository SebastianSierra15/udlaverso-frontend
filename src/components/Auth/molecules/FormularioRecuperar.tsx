import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecuperacion } from "../../../hooks";
import {
  recuperacionCodigoSchema,
  recuperacionCorreoSchema,
  recuperacionRestablecerSchema,
} from "../../../schemas";
import { InputFlotante } from "../atoms";
import { Boton, AlertaEmergente } from "../../Shared";

export const FormularioRecuperar: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [bloqueado, setBloqueado] = useState(false);

  const navigate = useNavigate();

  const {
    loading,
    codigoEnviado,
    codigoVerificado,
    enviarCodigo,
    verificarCodigo,
    restablecerContrasenia,
  } = useRecuperacion();

  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const mostrarAlerta = (
    mensaje: string,
    tipo: "error" | "success" | "info" | "warning" = "info",
  ) => setAlerta({ visible: true, mensaje, tipo });

  const handleEnviarCodigo = async (e: React.FormEvent) => {
    e.preventDefault();
    const validacion = recuperacionCorreoSchema.safeParse({ correo });
    if (!validacion.success) {
      mostrarAlerta(
        validacion.error.issues[0]?.message || "Correo invalido.",
        "warning"
      );
      return;
    }

    const res = await enviarCodigo(correo);
    mostrarAlerta(res.mensaje, res.success ? "success" : "error");
  };

  const handleVerificarCodigo = async (e: React.FormEvent) => {
    e.preventDefault();
    const validacion = recuperacionCodigoSchema.safeParse({ correo, codigo });
    if (!validacion.success) {
      mostrarAlerta(
        validacion.error.issues[0]?.message || "Datos invalidos.",
        "warning"
      );
      return;
    }
    const res = await verificarCodigo(correo, codigo);
    mostrarAlerta(res.mensaje, res.success ? "success" : "error");
  };

  const handleRestablecer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (bloqueado || loading) return;

    const validacion = recuperacionRestablecerSchema.safeParse({
      correo,
      codigo,
      nueva,
      confirmar,
    });
    if (!validacion.success) {
      mostrarAlerta(
        validacion.error.issues[0]?.message || "Revisa los datos.",
        "warning"
      );
      return;
    }

    setBloqueado(true);

    const res = await restablecerContrasenia(correo, codigo, nueva);

    mostrarAlerta(res.mensaje, res.success ? "success" : "error");

    if (res.success) {
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setBloqueado(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full text-center">
      {!codigoEnviado && (
        <form onSubmit={handleEnviarCodigo} className="flex flex-col gap-5">
          <p className="text-sm text-udlaverso-gris">
            Ingresa tu correo electrónico registrado para restablecer tu
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
          <Boton
            texto="Enviar código de verificación"
            cargando={loading}
            variante="principal"
            tipo="submit"
          />
        </form>
      )}

      {codigoEnviado && !codigoVerificado && (
        <form onSubmit={handleVerificarCodigo} className="flex flex-col gap-5">
          <p className="text-sm text-udlaverso-gris">
            Hemos enviado un código de verificación a <strong>{correo}</strong>.
          </p>
          <InputFlotante
            id="codigo"
            etiqueta="Código de verificación"
            valor={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            requerido
            maxLength={6}
          />
          <Boton
            texto="Verificar código"
            cargando={loading}
            variante="principal"
            tipo="submit"
          />
        </form>
      )}

      {codigoVerificado && (
        <form onSubmit={handleRestablecer} className="flex flex-col gap-5">
          <InputFlotante
            id="nueva"
            tipo="password"
            etiqueta="Nueva contraseña"
            valor={nueva}
            onChange={(e) => setNueva(e.target.value)}
            requerido
            mostrarTogglePassword
          />

          <InputFlotante
            id="confirmar"
            tipo="password"
            etiqueta="Confirmar nueva contraseña"
            valor={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            requerido
            mostrarTogglePassword
          />

          <Boton
            texto="Restablecer contraseña"
            cargando={loading}
            variante="principal"
            tipo="submit"
            deshabilitado={loading || bloqueado}
          />
        </form>
      )}

      <p className="text-sm text-center text-udlaverso-gris mt-2">
        ¿Recordaste tu contraseña?{" "}
        <Link
          to="/login"
          className="text-udlaverso-verde hover:text-udlaverso-verdeClaro font-semibold"
        >
          Inicia sesión
        </Link>
      </p>

      <AlertaEmergente
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        visible={alerta.visible}
        onClose={() => setAlerta((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  );
};



