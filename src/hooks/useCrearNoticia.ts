import { useState } from "react";
import * as noticiasController from "../controllers/noticiasController";

export const useCrearNoticia = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const crear = async (noticia: any, imagen: File) => {
    setCargando(true);
    setError(null);
    try {
      await noticiasController.crearNoticia(noticia, imagen);
      setExito(true);
    } catch (err: any) {
      setError(err?.message || "Error al crear la noticia");
    } finally {
      setCargando(false);
    }
  };

  return { crear, cargando, error, exito };
};
