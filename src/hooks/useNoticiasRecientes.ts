import { useEffect, useState } from "react";
import { obtenerNoticiasRecientes } from "../controllers/noticiasController";
import type { Noticia } from "../types/Noticia";

export const useNoticiasRecientes = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      setCargando(true);
      const data = await obtenerNoticiasRecientes();
      setNoticias(data);
      setCargando(false);
    };
    fetchNoticias();
  }, []);

  return { noticias, cargando };
};
