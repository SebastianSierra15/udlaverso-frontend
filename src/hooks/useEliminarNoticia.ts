import { useState } from "react";
import { eliminarNoticia } from "../services/noticias.service";

export const useEliminarNoticia = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const eliminar = async (id: number) => {
    setCargando(true);
    setError(null);
    try {
      await eliminarNoticia(id);
      setExito(true);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Error al eliminar la noticia");
    } finally {
      setCargando(false);
    }
  };

  return { eliminar, cargando, error, exito };
};
