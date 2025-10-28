import { useState } from "react";
import { actualizarProyectoController } from "../controllers/proyectosController";
import type { ProyectoData, Proyecto } from "../types/Proyecto.type";

export function useEditarProyecto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editarProyecto = async (id: number, data: ProyectoData) => {
    try {
      setLoading(true);
      setError(null);

      const actualizado: Proyecto = await actualizarProyectoController(
        id,
        data
      );

      return actualizado;
    } catch (e: any) {
      setError(e?.response?.data?.error ?? "Error al actualizar el proyecto");
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { editarProyecto, loading, error };
}
