import {
  obtenerProyectoPorNombre,
  listarProyectos as listarProyectosService,
  listarProyectosMasVistos,
  crearProyectoService,
  actualizarProyectoService,
  actualizarProyectoConImagenesService,
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
  proyecto: ProyectoData & { hero: File; galeria: File[] }
): Promise<Proyecto> => {
  try {
    const nuevoProyecto = await crearProyectoService(proyecto);
    return nuevoProyecto;
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en crearProyectoController:", error);

    if (err.response?.status === 403) {
      alert("No tienes permiso para crear proyectos.");
      throw new Error("Sin permiso");
    }

    if (err.response?.status === 401) {
      alert("Tu sesión expiró. Inicia sesión nuevamente.");
      localStorage.removeItem("token");
      window.location.href = "/login";
      throw new Error("Sesión expirada");
    }

    throw err;
  }
};

export const actualizarProyectoController = async (
  id: number,
  data: ProyectoData & {
    hero?: File;
    galeria?: File[];
    imagenesEliminadas?: string[];
  }
): Promise<Proyecto> => {
  try {
    let actualizado: Proyecto;

    if (
      data.hero ||
      (data.galeria && data.galeria.length > 0) ||
      (data.imagenesEliminadas && data.imagenesEliminadas.length > 0)
    ) {
      actualizado = await actualizarProyectoConImagenesService(id, data);
    } else {
      actualizado = await actualizarProyectoService(id, data);
    }

    return actualizado;
  } catch (error: unknown) {
    const err = error as ApiError;
    console.error("❌ Error en actualizarProyectoController:", err);

    if (err.response?.status === 403) {
      alert("No tienes permiso para editar proyectos.");
      throw new Error("Sin permiso");
    }

    if (err.response?.status === 401) {
      alert("Tu sesión expiró. Inicia sesión nuevamente.");
      localStorage.removeItem("token");
      window.location.href = "/login";
      throw new Error("Sesión expirada");
    }

    throw err;
  }
};
