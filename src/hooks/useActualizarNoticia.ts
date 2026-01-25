import { useState } from "react";
import {
  actualizarNoticiaConImagen,
  type NoticiaPayload,
} from "../services/noticias.service";

export const useActualizarNoticia = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const actualizar = async (
    id: number,
    noticia: NoticiaPayload,
    imagen?: File
  ) => {
    setCargando(true);
    setError(null);

    try {
      const response = await actualizarNoticiaConImagen(id, noticia, imagen);
      setExito(true);
      return response;
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Error al actualizar la noticia");
      throw err;
    } finally {
      setCargando(false);
    }
  };

  return { actualizar, cargando, error, exito };
};
