import { useState } from "react";
import {
  actualizarProyectoConImagenesService,
  actualizarProyectoService,
} from "../services/proyectos.service";
import type { ProyectoData, Proyecto } from "../types/Proyecto.type";

export function useEditarProyecto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editarProyecto = async (
    id: number,
    data: ProyectoData & {
      hero?: File;
      galeria?: File[];
      imagenesEliminadas?: string[];
    }
  ) => {
    try {
      setLoading(true);
      setError(null);

      const actualizado: Proyecto =
        data.hero ||
        (data.galeria && data.galeria.length > 0) ||
        (data.imagenesEliminadas && data.imagenesEliminadas.length > 0)
          ? await actualizarProyectoConImagenesService(id, data)
          : await actualizarProyectoService(id, data);

      return actualizado;
    } catch (e: unknown) {
      const err = e as ApiError;
      setError(err.response?.data?.error ?? "Error al actualizar el proyecto");
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { editarProyecto, loading, error };
}
