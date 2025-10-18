import api from "./api";
import type { Categoria } from "../types/Categoria";

export const obtenerCategorias = async (): Promise<Categoria[]> => {
  const { data } = await api.get("/categorias");

  return data.map((c: any) => ({
    id: c.idCategoria,
    nombre: c.nombreCategoria,
  }));
};
