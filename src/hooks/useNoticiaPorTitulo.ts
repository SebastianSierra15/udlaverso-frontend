import { useEffect, useState } from "react";
import { obtenerNoticiaPorTitulo } from "../controllers/noticiasController";
import type { Noticia } from "../types/Noticia.type";

export const useNoticiaPorTitulo = (titulo: string) => {
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true; // evita setState en componente desmontado

    const fetchNoticia = async () => {
      try {
        setCargando(true);
        const data = await obtenerNoticiaPorTitulo(titulo);

        if (activo) {
          setNoticia(data);
        }
      } catch (error) {
        console.error("Error al obtener la noticia:", error);
        if (activo) setNoticia(null);
      } finally {
        // ⚠️ pequeño delay opcional para asegurar que Helmet vea el cambio
        if (activo) {
          setTimeout(() => setCargando(false), 50);
        }
      }
    };

    if (titulo) fetchNoticia();

    return () => {
      activo = false;
    };
  }, [titulo]);

  return { noticia, cargando };
};
