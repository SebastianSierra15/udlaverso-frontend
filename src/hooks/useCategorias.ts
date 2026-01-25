import { useEffect, useState } from "react";
import { obtenerCategorias } from "../services/categorias.service";
import type { Categoria } from "../types/Categoria.type";

export const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    obtenerCategorias()
      .then(setCategorias)
      .catch((error) => {
        console.error("Error al cargar categorías:", error);
        setError("Error al cargar categorías");
      })
      .finally(() => setLoading(false));
  }, []);

  return { categorias, loading, error };
};
