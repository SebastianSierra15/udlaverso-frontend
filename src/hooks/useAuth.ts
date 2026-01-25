import { useState, useEffect } from "react";
import { loginService } from "../services/auth.service";
import { loginSchema } from "../schemas";
import { registrarAnalitica } from "../services/analiticas.service";
import { STORAGE_KEYS } from "../constants";
import { ROUTES } from "../routes";
import type { Usuario } from "../types/Usuario.type";

const registrarInicioSesion = async (usuarioId: number) => {
  await registrarAnalitica({
    idUsuario: usuarioId,
    idTipoAnalitica: 4,
    descripcionAnalitica: "Inicio de sesión del usuario",
  });
};

const registrarCierreSesion = async (usuarioId: number) => {
  await registrarAnalitica({
    idUsuario: usuarioId,
    idTipoAnalitica: 5,
    descripcionAnalitica: "Cierre de sesión del usuario",
  });
};

export const useAuth = () => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEYS.user);
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoadingUser(false);
  }, []);

  const login = async (
    correo: string,
    contrasenia: string
  ): Promise<boolean> => {
    try {
      const validacion = loginSchema.safeParse({ correo, contrasenia });
      if (!validacion.success) {
        setError(validacion.error.issues[0]?.message || "Datos invalidos");
        return false;
      }

      setLoading(true);
      setError(null);

      const data = await loginService(correo, contrasenia);

      const usuario: Usuario = {
        idUsuario: data.idUsuario,
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

      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(usuario));
      localStorage.setItem(STORAGE_KEYS.token, data.token);

      setUser(usuario);

      // Registrar inicio de sesión
      if (usuario.idUsuario) {
        registrarInicioSesion(usuario.idUsuario);
      }

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

  const logout = async () => {
    if (user?.idUsuario) {
      // Registrar cierre de sesión antes de limpiar datos
      await registrarCierreSesion(user.idUsuario);
    }

    localStorage.removeItem(STORAGE_KEYS.user);
    localStorage.removeItem(STORAGE_KEYS.token);
    setUser(null);
    window.location.href = ROUTES.login;
  };

  return { user, login, logout, loading, loadingUser, error };
};
