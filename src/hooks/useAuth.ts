import { useState, useEffect } from "react";
import { loginService } from "../services/auth.service";
import type { Usuario } from "../types/Usuario.type";

export const useAuth = () => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoadingUser(false);
  }, []);

  const login = async (
    correo: string,
    contrasenia: string
  ): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      const data = await loginService(correo, contrasenia);

      const usuario: Usuario = {
        correoUsuario: correo,
        rolUsuario: {
          idRol: 0,
          nombreRol: data.role,
        },
        permisos: data.permissions.map((p: string) => ({
          nombrePermiso: p,
        })),
        token: data.token,
      };

      localStorage.setItem("user", JSON.stringify(usuario));
      setUser(usuario);
      return true;
    } catch (err: unknown) {
      const errorResponse = err as {
        response?: { data?: { message?: string } };
      };
      setError(
        errorResponse.response?.data?.message || "Error al iniciar sesión"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  return { user, login, logout, loading, loadingUser, error };
};
