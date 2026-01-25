import { useState } from "react";
import { crearProyectoService } from "../services/proyectos.service";
import type { Proyecto, ProyectoData } from "../types/Proyecto.type";

export const useCrearProyecto = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const crearProyecto = async (
    proyecto: ProyectoData & { hero: File; galeria: File[] }
  ): Promise<Proyecto> => {
    try {
      setLoading(true);
      const nuevoProyecto = await crearProyectoService(proyecto);
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
