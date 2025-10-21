import { useEffect, useState } from "react";
import { listarCategorias } from "../controllers/categoriaController";
import type { Categoria } from "../types/Categoria.type";

export const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listarCategorias()
      .then(setCategorias)
      .catch(() => setError("Error al cargar categorías"))
      .finally(() => setLoading(false));
  }, []);

  return { categorias, loading, error };
};
