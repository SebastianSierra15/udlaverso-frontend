import { registroService, loginService } from "../services/auth.service";

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
