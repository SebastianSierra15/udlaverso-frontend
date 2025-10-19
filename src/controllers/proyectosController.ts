import {
  obtenerProyectos,
  listarProyectosMasVistos,
  crearProyectoService,
} from "../services/proyectos.service";
import type { Proyecto } from "../types/Proyecto";

export const listarProyectos = async (): Promise<Proyecto[]> => {
  try {
    const proyectos = await obtenerProyectos();

    if (!Array.isArray(proyectos)) {
      throw new Error("Respuesta inválida del servidor");
    }

    return proyectos;
  } catch (error: any) {
    console.error("❌ Error en listarProyectos:", error);

    if (error.response?.status === 401) {
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

export const crearProyectoController = async (proyecto: any) => {
  try {
    const nuevoProyecto = await crearProyectoService(proyecto);
    return nuevoProyecto;
  } catch (error: any) {
    console.error("❌ Error en crearProyectoController:", error);
    throw error;
  }
};
