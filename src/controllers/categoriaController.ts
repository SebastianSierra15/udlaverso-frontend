import { obtenerCategorias } from "../services/categorias.service";
import type { Categoria } from "../types/Categoria";

export const listarCategorias = async (): Promise<Categoria[]> => {
  try {
    const categorias = await obtenerCategorias();
    if (!Array.isArray(categorias)) {
      throw new Error("Respuesta inválida del servidor");
    }
    return categorias;
  } catch (error: any) {
    console.error("Error en controller (listarCategorias):", error);

    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return [];
  }
};
