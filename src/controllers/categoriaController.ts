import { obtenerCategorias } from "../services/categorias.service";
import type { Categoria } from "../types/Categoria.type";

export const listarCategorias = async (): Promise<Categoria[]> => {
  try {
    const categorias = await obtenerCategorias();
    if (!Array.isArray(categorias)) {
      throw new Error("Respuesta inválida del servidor");
    }
    return categorias;
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("Error en controller (listarCategorias):", error);

    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return [];
  }
};
