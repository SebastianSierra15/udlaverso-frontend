import { useState } from "react";
import { registroController } from "../controllers/authController";

interface ResultadoRegistro {
  success: boolean;
  mensaje: string;
}

export const useRegistro = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registrar = async (
    formData: Record<string, any>
  ): Promise<ResultadoRegistro> => {
    try {
      setLoading(true);
      setError(null);

      const resultado = await registroController(formData);
      if (!resultado.success) setError(resultado.mensaje);

      return resultado;
    } catch {
      const msg = "Ocurrió un error al registrar el usuario.";
      setError(msg);
      return { success: false, mensaje: msg };
    } finally {
      setLoading(false);
    }
  };

  return { registrar, loading, error };
};
