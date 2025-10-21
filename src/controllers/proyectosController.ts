import {
  obtenerProyectoPorNombre,
  obtenerProyectos,
  listarProyectosMasVistos,
  crearProyectoService,
} from "../services/proyectos.service";
import type { Proyecto, ProyectoData } from "../types/Proyecto";

export const obtenerProyectoPorNombreController = async (
  nombre: string
): Promise<Proyecto | null> => {
  try {
    const proyecto = await obtenerProyectoPorNombre(nombre);
    return proyecto;
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en obtenerProyectoPorNombreController:", error);

    if (err.response?.status === 404) {
      console.warn("⚠️ Proyecto no encontrado:", nombre);
      return null;
    }

    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return null;
  }
};

export const listarProyectos = async (): Promise<Proyecto[]> => {
  try {
    const proyectos = await obtenerProyectos();

    if (!Array.isArray(proyectos)) {
      throw new Error("Respuesta inválida del servidor");
    }

    return proyectos;
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en listarProyectos:", error);

    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return [];
  }
};

export const obtenerProyectosMasVistos = async (limite = 10) => {
  try {
    return await listarProyectosMasVistos(limite);
  } catch (error) {
    console.error("Error al obtener proyectos más vistos:", error);
    return [];
  }
};

export const crearProyectoController = async (
  proyecto: ProyectoData
): Promise<Proyecto> => {
  try {
    const nuevoProyecto = await crearProyectoService(proyecto);
    return nuevoProyecto;
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en crearProyectoController:", error);
    throw err;
  }
};
