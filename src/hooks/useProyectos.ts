import { useEffect, useState } from "react";
import { listarProyectos } from "../controllers/proyectosController";
import type { Proyecto } from "../types/Proyecto.type";

export const useProyectos = () => {
  const [categoria, setCategoria] = useState("Todas");
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(6);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [debouncedQ, setDebouncedQ] = useState(q);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQ(q);
    }, 300);
    return () => clearTimeout(handler);
  }, [q]);

  const cargarProyectos = async () => {
    try {
      setLoading(true);
      const res = await listarProyectos(
        page,
        size,
        q,
        categoria === "Todas" ? "" : categoria
      );
      setProyectos(res.content);
      setTotal(res.total);
      setPages(res.pages);
    } catch (err) {
      console.error(err);
      setError("Error al cargar los proyectos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProyectos();
  }, [page, size, debouncedQ, categoria]);

  return {
    proyectos,
    total,
    page,
    pages,
    size,
    q,
    categoria,
    setPage,
    setSize,
    setQ,
    setCategoria,
    loading,
    error,
  };
};
