import {
  obtenerProyectoPorNombre,
  listarProyectos as listarProyectosService,
  listarProyectosMasVistos,
  crearProyectoService,
} from "../services/proyectos.service";
import type { Proyecto, ProyectoData } from "../types/Proyecto.type";

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

export const listarProyectos = async (
  page = 0,
  size = 5,
  q = "",
  categoria = ""
): Promise<{
  content: Proyecto[];
  total: number;
  page: number;
  pages: number;
}> => {
  try {
    const data = await listarProyectosService(page, size, q, categoria);

    if (!data || !Array.isArray(data.content)) {
      throw new Error("Respuesta inválida del servidor");
    }

    return data;
  } catch (error: any) {
    console.error("❌ Error en listarProyectos:", error);
    return { content: [], total: 0, page: 0, pages: 0 };
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
