import { useState } from "react";
import {
  enviarCodigoController,
  verificarCodigoController,
  restablecerContraseniaController,
} from "../controllers/authController";

export const useRecuperacion = () => {
  const [loading, setLoading] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [codigoVerificado, setCodigoVerificado] = useState(false);
  const [mensaje, setMensaje] = useState<string | null>(null);

  const enviarCodigo = async (correo: string) => {
    setLoading(true);
    try {
      const res = await enviarCodigoController(correo, "recuperacion");
      setMensaje(res.mensaje);
      setCodigoEnviado(res.success);
      return res;
    } catch (error) {
      console.error("❌ Error en enviarCodigo:", error);
      setMensaje("Error al enviar el código. Intenta nuevamente.");
      return { success: false, mensaje: "Error al enviar el código." };
    } finally {
      setLoading(false);
    }
  };

  const verificarCodigo = async (correo: string, codigo: string) => {
    setLoading(true);
    try {
      const res = await verificarCodigoController(
        correo,
        codigo,
        "recuperacion"
      );
      setMensaje(res.mensaje);
      setCodigoVerificado(res.success);
      return res;
    } catch (error) {
      console.error("❌ Error en verificarCodigo:", error);
      setMensaje("Error al verificar el código.");
      return { success: false, mensaje: "Error al verificar el código." };
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
      const res = await restablecerContraseniaController(correo, codigo, nueva);
      setMensaje(res.mensaje);
      return res;
    } catch (error) {
      console.error("❌ Error en restablecerContrasenia:", error);
      setMensaje("Error al restablecer la contraseña.");
      return { success: false, mensaje: "Error al restablecer la contraseña." };
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
