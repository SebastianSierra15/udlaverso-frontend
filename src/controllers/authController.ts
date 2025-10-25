import {
  registroService,
  loginService,
  enviarCodigoService,
  verificarCodigoService,
  restablecerContraseniaService,
} from "../services/auth.service";

export const loginController = async (
  correo: string,
  contrasenia: string
): Promise<{ success: boolean; mensaje: string }> => {
  try {
    const res = await loginService(correo, contrasenia);
    return {
      success: true,
      mensaje: res.mensaje || "Inicio de sesión exitoso",
    };
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en loginController:", err);

    const msg =
      err.response?.data?.error ||
      "Error al iniciar sesión. Verifica tus credenciales.";
    return { success: false, mensaje: msg };
  }
};

export const registroController = async (
  formData: Record<string, any>
): Promise<{ success: boolean; mensaje: string }> => {
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
        : formData.universidad,
    };

    const res = await registroService(payload);
    return { success: true, mensaje: res.mensaje || "Registro exitoso" };
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en registroController:", err);

    const msg =
      err.response?.data?.error || "Ocurrió un error al registrar el usuario.";
    return { success: false, mensaje: msg };
  }
};

export const enviarCodigoController = async (
  correo: string,
  tipo = "registro"
): Promise<{ success: boolean; mensaje: string }> => {
  try {
    const res = await enviarCodigoService(correo, tipo);
    return {
      success: true,
      mensaje: res.mensaje || "Código enviado al correo.",
    };
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en enviarCodigoController:", err);
    const msg =
      err.response?.data?.error || "Error al enviar el código de verificación.";
    return { success: false, mensaje: msg };
  }
};

export const verificarCodigoController = async (
  correo: string,
  codigo: string,
  tipo = "registro"
): Promise<{ success: boolean; mensaje: string }> => {
  try {
    const res = await verificarCodigoService(correo, codigo, tipo);
    return {
      success: true,
      mensaje: res.mensaje || "Código verificado correctamente.",
    };
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en verificarCodigoController:", err);
    const msg = err.response?.data?.error || "Código inválido o expirado.";
    return { success: false, mensaje: msg };
  }
};

export const restablecerContraseniaController = async (
  correo: string,
  codigo: string,
  nueva: string
): Promise<{ success: boolean; mensaje: string }> => {
  try {
    const res = await restablecerContraseniaService(correo, codigo, nueva);
    return {
      success: true,
      mensaje: res.mensaje || "Contraseña restablecida correctamente.",
    };
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en restablecerContraseniaController:", err);
    const msg =
      err.response?.data?.error || "Error al restablecer la contraseña.";
    return { success: false, mensaje: msg };
  }
};
