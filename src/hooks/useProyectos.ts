import { useEffect, useState } from "react";
import { listarProyectos } from "../controllers/proyectosController";
import type { Proyecto } from "../types/Proyecto";

export const useProyectos = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listarProyectos()
      .then(setProyectos)
      .catch(() => setError("Error al cargar los proyectos"))
      .finally(() => setLoading(false));
  }, []);

  return { proyectos, loading, error };
};
