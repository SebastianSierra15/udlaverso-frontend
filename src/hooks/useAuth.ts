import { useState } from "react";
import { loginService } from "../services/auth.service";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (correo: string, contrasenia: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await loginService(correo, contrasenia);
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.role);
      return true;
    } catch (err) {
      const error = err as unknown as {
        response?: { data?: { message?: string } };
      };
      setError(error.response?.data?.message || "Error al iniciar sesión");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    window.location.href = "/login";
  };

  return { login, logout, loading, error };
};
