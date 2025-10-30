import { useState, useEffect } from "react";
import type { Resenia } from "../types/Resenia.type";
import {
  crearReseniaController,
  actualizarReseniaController,
  eliminarReseniaController,
  obtenerReseniasPorProyectoController,
} from "../controllers/reseniasController";

export const useResenias = (proyectoId: number, usuarioId?: number) => {
  const [resenias, setResenias] = useState<Resenia[]>([]);
  const [miResenia, setMiResenia] = useState<Resenia | null>(null);

  useEffect(() => {
    if (!proyectoId) return;
    const cargar = async () => {
      const data = await obtenerReseniasPorProyectoController(proyectoId);
      setResenias(data);
      if (usuarioId) {
        const propia = data.find((r) => r.usuarioId === usuarioId);
        if (propia) setMiResenia(propia);
      }
    };
    cargar();
  }, [proyectoId, usuarioId]);

  const crear = async (comentario: string, estrellas: number) => {
    const nueva = await crearReseniaController(proyectoId, {
      comentarioResenia: comentario,
      valoracionResenia: estrellas,
    });
    if (nueva) {
      setResenias([nueva, ...resenias]);
      setMiResenia(nueva);
    }
  };

  const editar = async (id: number, comentario: string, estrellas: number) => {
    const actualizada = await actualizarReseniaController(id, {
      comentarioResenia: comentario,
      valoracionResenia: estrellas,
    });
    if (actualizada) {
      setResenias((prev) =>
        prev.map((r) => (r.idResenia === id ? actualizada : r))
      );
      setMiResenia(actualizada);
    }
  };

  const eliminar = async (id: number) => {
    const ok = await eliminarReseniaController(id);
    if (ok) {
      setResenias((prev) => prev.filter((r) => r.idResenia !== id));
      setMiResenia(null);
    }
  };

  return { resenias, miResenia, crear, editar, eliminar };
};
