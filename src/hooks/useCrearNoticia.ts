import { useState } from "react";
import { crearNoticia, type NoticiaPayload } from "../services/noticias.service";

export const useCrearNoticia = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const crear = async (noticia: NoticiaPayload, imagen: File) => {
    setCargando(true);
    setError(null);
    try {
      await crearNoticia(noticia, imagen);
      setExito(true);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Error al crear la noticia");
    } finally {
      setCargando(false);
    }
  };

  return { crear, cargando, error, exito };
};
