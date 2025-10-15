import { useFetch } from "../../../hooks/useFetch";

export const useCategorias = () => {
  const { data, loading, error } =
    useFetch<{ id: number; nombre: string }[]>("/categorias");

  return { categorias: data || [], loading, error };
};
