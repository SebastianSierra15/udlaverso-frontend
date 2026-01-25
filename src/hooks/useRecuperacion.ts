import { useState } from "react";
import {
  enviarCodigoService,
  verificarCodigoService,
  restablecerContraseniaService,
} from "../services/auth.service";

type ApiMensaje = {
  mensaje?: string;
  error?: string;
};

export const useRecuperacion = () => {
  const [loading, setLoading] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [codigoVerificado, setCodigoVerificado] = useState(false);
  const [mensaje, setMensaje] = useState<string | null>(null);

  const enviarCodigo = async (correo: string) => {
    setLoading(true);
    try {
      const res = (await enviarCodigoService(correo, "recuperacion")) as ApiMensaje;
      const mensaje = res.mensaje || "Código enviado al correo.";
      setMensaje(mensaje);
      setCodigoEnviado(true);
      return { success: true, mensaje };
    } catch (error) {
      console.error("❌ Error en enviarCodigo:", error);
      const err = error as ApiError;
      const mensaje =
        err.response?.data?.error ||
        "Error al enviar el código. Intenta nuevamente.";
      setMensaje(mensaje);
      return { success: false, mensaje };
    } finally {
      setLoading(false);
    }
  };

  const verificarCodigo = async (correo: string, codigo: string) => {
    setLoading(true);
    try {
      const res = (await verificarCodigoService(
        correo,
        codigo,
        "recuperacion"
      )) as ApiMensaje;
      const mensaje = res.mensaje || "Código verificado correctamente.";
      setMensaje(mensaje);
      setCodigoVerificado(true);
      return { success: true, mensaje };
    } catch (error) {
      console.error("❌ Error en verificarCodigo:", error);
      const err = error as ApiError;
      const mensaje = err.response?.data?.error || "Error al verificar el código.";
      setMensaje(mensaje);
      return { success: false, mensaje };
    } finally {
      setLoading(false);
    }
  };

  const restablecerContrasenia = async (
    correo: string,
    codigo: string,
    nueva: string
  ) => {
    setLoading(true);
    try {
      const res = (await restablecerContraseniaService(
        correo,
        codigo,
        nueva
      )) as ApiMensaje;
      const mensaje = res.mensaje || "Contraseña restablecida correctamente.";
      setMensaje(mensaje);
      return { success: true, mensaje };
    } catch (error) {
      console.error("❌ Error en restablecerContrasenia:", error);
      const err = error as ApiError;
      const mensaje =
        err.response?.data?.error || "Error al restablecer la contraseña.";
      setMensaje(mensaje);
      return { success: false, mensaje };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    mensaje,
    codigoEnviado,
    codigoVerificado,
    enviarCodigo,
    verificarCodigo,
    restablecerContrasenia,
  };
};
