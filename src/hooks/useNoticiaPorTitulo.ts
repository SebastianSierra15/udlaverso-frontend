import { useEffect, useState } from "react";
import { obtenerNoticiaPorTitulo } from "../controllers/noticiasController";
import type { Noticia } from "../types/Noticia.type";

export const useNoticiaPorTitulo = (titulo: string) => {
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchNoticia = async () => {
      setCargando(true);
      const data = await obtenerNoticiaPorTitulo(titulo);
      setNoticia(data);
      setCargando(false);
    };
    if (titulo) fetchNoticia();
  }, [titulo]);

  return { noticia, cargando };
};
