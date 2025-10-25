import { useState } from "react";
import {
  registroController,
  enviarCodigoController,
  verificarCodigoController,
} from "../controllers/authController";

interface ResultadoRegistro {
  success: boolean;
  mensaje: string;
}

export const useRegistro = () => {
  const [loading, setLoading] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [correoVerificado, setCorreoVerificado] = useState(false);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const enviarCodigo = async (correo: string) => {
    setLoading(true);
    const res = await enviarCodigoController(correo);
    setMensaje(res.mensaje);
    setCodigoEnviado(res.success);
    setLoading(false);
    return res;
  };

  const verificarCodigo = async (correo: string, codigo: string) => {
    setLoading(true);
    const res = await verificarCodigoController(correo, codigo);
    setMensaje(res.mensaje);
    setCorreoVerificado(res.success);
    setLoading(false);
    return res;
  };

  const registrar = async (
    formData: Record<string, any>
  ): Promise<ResultadoRegistro> => {
    if (loading || registroExitoso) {
      console.warn("Intento duplicado de registro ignorado");
      return { success: false, mensaje: "Registro en proceso o completado..." };
    }

    setLoading(true);
    try {
      const res = await registroController(formData);
      if (res.success) setRegistroExitoso(true);
      setMensaje(res.mensaje);
      return res;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    registroExitoso,
    codigoEnviado,
    correoVerificado,
    mensaje,
    enviarCodigo,
    verificarCodigo,
    registrar,
  };
};
