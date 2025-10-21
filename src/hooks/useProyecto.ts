import { useEffect, useState } from "react";
import type { Proyecto } from "../types/Proyecto";
import { obtenerProyectoPorNombreController } from "../controllers/proyectosController";

export const useProyecto = (nombre?: string) => {
  const [proyecto, setProyecto] = useState<Proyecto | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!nombre) return;

    const cargarProyecto = async () => {
      try {
        setCargando(true);
        setError(null);

        const data = await obtenerProyectoPorNombreController(nombre);

        if (!data) {
          setError("No se encontró el proyecto solicitado.");
          setProyecto(null);
        } else {
          setProyecto(data);
        }
      } catch (error: unknown) {
        const err = error as ApiError;
        console.error("❌ Error en useProyecto:", err);
        setError("Error al cargar el proyecto.");
        setProyecto(null);
      } finally {
        setCargando(false);
      }
    };

    cargarProyecto();
  }, [nombre]);

  return { proyecto, cargando, error };
};
