import api from "./api";
import type { Categoria } from "../types/Categoria";

export const obtenerCategorias = async (): Promise<Categoria[]> => {
  const { data } = await api.get<Categoria[]>("/categorias");
  return data.map((c) => ({
    id: c.id,
    nombre: c.nombre,
  }));
};
