import { useEffect, useState } from "react";
import type { Proyecto } from "../types/Proyecto.type";
import { obtenerProyectoPorNombre } from "../services/proyectos.service";

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

        const data = await obtenerProyectoPorNombre(nombre);
        setProyecto(data);
      } catch (error: unknown) {
        const err = error as ApiError;
        console.error("❌ Error en useProyecto:", err);
        if (err.response?.status === 404) {
          setError("No se encontró el proyecto solicitado.");
        } else {
          setError("Error al cargar el proyecto.");
        }
        setProyecto(null);
      } finally {
        setCargando(false);
      }
    };

    cargarProyecto();
  }, [nombre]);

  return { proyecto, cargando, error };
};
