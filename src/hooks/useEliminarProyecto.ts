import { useState } from "react";
import { eliminarProyectoService } from "../services/proyectos.service";

/**
 * Hook para manejar la eliminación de proyectos
 */
export function useEliminarProyecto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eliminarProyecto = async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await eliminarProyectoService(id);
      return true;
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Error desconocido al eliminar proyecto");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { eliminarProyecto, loading, error };
}
