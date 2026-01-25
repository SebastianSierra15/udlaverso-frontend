import { useState } from "react";
import {
  registroService,
  enviarCodigoService,
  verificarCodigoService,
} from "../services/auth.service";
import type { RegistroForm } from "../types/RegistroForm.type";

type ApiMensaje = {
  mensaje?: string;
  error?: string;
};

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
    try {
      const res = (await enviarCodigoService(correo)) as ApiMensaje;
      const mensaje = res.mensaje || "CÃ³digo enviado al correo.";
      setMensaje(mensaje);
      setCodigoEnviado(true);
      return { success: true, mensaje };
    } catch (error: unknown) {
      const err = error as ApiError;
      const mensaje =
        err.response?.data?.error || "Error al enviar el cÃ³digo.";
      setMensaje(mensaje);
      setCodigoEnviado(false);
      return { success: false, mensaje };
    } finally {
      setLoading(false);
    }
  };

  const verificarCodigo = async (correo: string, codigo: string) => {
    setLoading(true);
    try {
      const res = (await verificarCodigoService(correo, codigo)) as ApiMensaje;
      const mensaje = res.mensaje || "CÃ³digo verificado correctamente.";
      setMensaje(mensaje);
      setCorreoVerificado(true);
      return { success: true, mensaje };
    } catch (error: unknown) {
      const err = error as ApiError;
      const mensaje =
        err.response?.data?.error || "CÃ³digo invÃ¡lido o expirado.";
      setMensaje(mensaje);
      setCorreoVerificado(false);
      return { success: false, mensaje };
    } finally {
      setLoading(false);
    }
  };

  const registrar = async (
    formData: RegistroForm
  ): Promise<ResultadoRegistro> => {
    if (loading || registroExitoso) {
      console.warn("Intento duplicado de registro ignorado");
      return { success: false, mensaje: "Registro en proceso o completado..." };
    }

    setLoading(true);
    try {
      const payload = {
        nombresUsuario: formData.nombre,
        apellidosUsuario: formData.apellido,
        correoUsuario: formData.esInstitucional
          ? `${formData.correo}@udla.edu.co`
          : formData.correo,
        contraseniaUsuario: formData.contrasena,
        universidadUsuario: formData.esInstitucional
          ? "Universidad de la Amazonia"
          : formData.universidad || "",
      };
      const res = (await registroService(payload)) as ApiMensaje;
      const mensaje = res.mensaje || "Registro exitoso";
      setRegistroExitoso(true);
      setMensaje(mensaje);
      return { success: true, mensaje };
    } catch (error: unknown) {
      const err = error as ApiError;
      const mensaje =
        err.response?.data?.error ||
        "OcurriÃ³ un error al registrar el usuario.";
      setMensaje(mensaje);
      return { success: false, mensaje };
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
