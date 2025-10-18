import { useEffect, useState } from "react";
import {
  listarProyectos,
  crearProyectoController,
} from "../controllers/proyectosController";
import type { Proyecto } from "../types/Proyecto";

export const useProyectos = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET
  useEffect(() => {
    listarProyectos()
      .then(setProyectos)
      .catch(() => setError("Error al cargar los proyectos"))
      .finally(() => setLoading(false));
  }, []);

  // POST
  const crearProyecto = async (proyecto: any) => {
    try {
      const nuevoProyecto = await crearProyectoController(proyecto);
      setProyectos((prev) => [...prev, nuevoProyecto]);
      return nuevoProyecto;
    } catch (error) {
      console.error("❌ Error al crear proyecto:", error);
      throw error;
    }
  };

  return { proyectos, loading, error, crearProyecto };
};
