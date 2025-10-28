import { useState } from "react";
import * as noticiasController from "../controllers/noticiasController";

export const useActualizarNoticia = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const actualizar = async (id: number, noticia: any, imagen?: File) => {
    setCargando(true);
    setError(null);

    try {
      const response = await noticiasController.actualizarNoticiaConImagen(
        id,
        noticia,
        imagen
      );
      setExito(true);
      return response;
    } catch (err: any) {
      setError(err?.message || "Error al actualizar la noticia");
      throw err;
    } finally {
      setCargando(false);
    }
  };

  return { actualizar, cargando, error, exito };
};
