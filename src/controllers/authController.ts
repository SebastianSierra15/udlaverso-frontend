import { useAuth } from "../hooks/useAuth";

export const useAuthController = () => {
  const { login, logout, loading, error } = useAuth();

  const handleLogin = async (
    correo: string,
    contrasenia: string
  ): Promise<boolean> => {
    const ok = await login(correo, contrasenia);
    if (ok) {
      window.location.href = "/admin";
      return true;
    } else {
      return false;
    }
  };

  return { handleLogin, logout, loading, error };
};
