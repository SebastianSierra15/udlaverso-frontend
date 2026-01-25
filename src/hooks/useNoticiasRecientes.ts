import { useEffect, useState } from "react";
import { listarNoticiasRecientes } from "../services/noticias.service";
import type { Noticia } from "../types/Noticia.type";

export const useNoticiasRecientes = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      setCargando(true);
      try {
        const data = await listarNoticiasRecientes();
        setNoticias(data);
      } catch (error) {
        console.error("Error al obtener noticias recientes:", error);
        setNoticias([]);
      }
      setCargando(false);
    };
    fetchNoticias();
  }, []);

  return { noticias, cargando };
};
