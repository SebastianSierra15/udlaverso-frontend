import { useState } from "react";
import { crearProyectoController } from "../controllers/proyectosController";
import type { Proyecto, ProyectoData } from "../types/Proyecto.type";

export const useCrearProyecto = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const crearProyecto = async (proyecto: ProyectoData): Promise<Proyecto> => {
    try {
      setLoading(true);
      const nuevoProyecto = await crearProyectoController(proyecto);
      return nuevoProyecto;
    } catch (err) {
      console.error("❌ Error al crear proyecto:", err);
      setError("Error al crear el proyecto");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { crearProyecto, loading, error };
};
