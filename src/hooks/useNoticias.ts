import { useEffect, useState } from "react";
import { obtenerNoticias } from "../controllers/noticiasController";
import type { Noticia } from "../types/Noticia.type";

export const useNoticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(6);
  const [q, setQ] = useState("");
  const [orden, setOrden] = useState<"asc" | "desc">("desc");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [debouncedQ, setDebouncedQ] = useState(q);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQ(q);
    }, 300);
    return () => clearTimeout(handler);
  }, [q]);

  const cargarNoticias = async () => {
    try {
      setCargando(true);
      const res = await obtenerNoticias(page, size, debouncedQ, orden);
      setNoticias(res.content);
      setTotal(res.total);
      setPages(res.pages);
    } catch (err) {
      console.error(err);
      setError("Error al cargar las noticias");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarNoticias();
  }, [page, size, debouncedQ, orden]);

  return {
    noticias,
    total,
    page,
    pages,
    size,
    q,
    orden,
    setPage,
    setSize,
    setQ,
    setOrden,
    cargando,
    error,
  };
};
