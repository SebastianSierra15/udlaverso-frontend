import { useState, useEffect, useCallback } from "react";
import type { Resenia } from "../types/Resenia.type";
import {
  crearReseniaService,
  actualizarReseniaService,
  eliminarReseniaService,
  obtenerReseniasPorProyectoService,
} from "../services/resenias.service";
import { STORAGE_KEYS } from "../constants";

export const useResenias = (proyectoId: number, usuarioId?: number) => {
  const [resenias, setResenias] = useState<Resenia[]>([]);
  const [miResenia, setMiResenia] = useState<Resenia | null>(null);

  const token = localStorage.getItem(STORAGE_KEYS.token) || "";

  const cargar = useCallback(async () => {
    try {
      const data = await obtenerReseniasPorProyectoService(proyectoId);
      setResenias(data);
      if (usuarioId) {
        const propia = data.find((r) => r.usuarioId === usuarioId);
        if (propia) setMiResenia(propia);
      }
    } catch (error) {
      console.error("Error cargando reseÃ±as:", error);
      setResenias([]);
      setMiResenia(null);
    }
  }, [proyectoId, usuarioId]);

  useEffect(() => {
    if (proyectoId) cargar();
  }, [proyectoId, cargar]);

  const crear = async (comentario: string, estrellas: number) => {
    try {
      const nueva = await crearReseniaService(
        proyectoId,
        { comentarioResenia: comentario, valoracionResenia: estrellas },
        token
      );
      setResenias([nueva, ...resenias]);
      setMiResenia(nueva);
    } catch (error) {
      console.error("Error creando reseÃ±a:", error);
    }
  };

  const editar = async (id: number, comentario: string, estrellas: number) => {
    try {
      const actualizada = await actualizarReseniaService(
        id,
        { comentarioResenia: comentario, valoracionResenia: estrellas },
        token
      );
      setResenias((prev) =>
        prev.map((r) => (r.idResenia === id ? actualizada : r))
      );
      setMiResenia(actualizada);
    } catch (error) {
      console.error("Error actualizando reseÃ±a:", error);
    }
  };

  const eliminar = async (id: number) => {
    try {
      await eliminarReseniaService(id, token);
      setResenias((prev) => prev.filter((r) => r.idResenia !== id));
      setMiResenia(null);
    } catch (error) {
      console.error("Error eliminando reseÃ±a:", error);
    }
  };

  return { resenias, miResenia, crear, editar, eliminar };
};


