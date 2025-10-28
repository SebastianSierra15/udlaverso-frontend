import { useState } from "react";
import * as noticiasController from "../controllers/noticiasController";

export const useEliminarNoticia = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const eliminar = async (id: number) => {
    setCargando(true);
    setError(null);
    try {
      await noticiasController.eliminarNoticia(id);
      setExito(true);
    } catch (err: any) {
      setError(err?.message || "Error al eliminar la noticia");
    } finally {
      setCargando(false);
    }
  };

  return { eliminar, cargando, error, exito };
};
