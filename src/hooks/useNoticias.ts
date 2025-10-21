import { useEffect, useState } from "react";
import { obtenerNoticias } from "../controllers/noticiasController";
import type { Noticia } from "../types/Noticia.type";

export const useNoticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      setCargando(true);
      const data = await obtenerNoticias();
      setNoticias(data);
      setCargando(false);
    };
    fetchNoticias();
  }, []);

  return { noticias, cargando };
};
