import { useState } from "react";
import { eliminarProyectoController } from "../controllers/proyectosController";

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
      const ok = await eliminarProyectoController(id);
      if (ok) return true;
      setError("No se pudo eliminar el proyecto.");
      return false;
    } catch (err: any) {
      setError(err.message || "Error desconocido al eliminar proyecto");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { eliminarProyecto, loading, error };
}
