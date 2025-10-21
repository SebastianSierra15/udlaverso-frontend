import api from "./api";
import type { Categoria } from "../types/Categoria.type";

export const obtenerCategorias = async (): Promise<Categoria[]> => {
  const { data } = await api.get<Categoria[]>("/categorias");
  return data.map((c) => ({
    idCategoria: c.idCategoria,
    nombreCategoria: c.nombreCategoria,
  }));
};
