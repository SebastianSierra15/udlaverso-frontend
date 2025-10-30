import {
  crearReseniaService,
  actualizarReseniaService,
  eliminarReseniaService,
  obtenerReseniasPorProyectoService,
} from "../services/resenias.service";
import type { Resenia } from "../types/Resenia.type";

export const crearReseniaController = async (
  proyectoId: number,
  data: {
    comentarioResenia: string;
    valoracionResenia: number;
  }
): Promise<Resenia | null> => {
  try {
    return await crearReseniaService(proyectoId, data);
  } catch (err) {
    console.error("Error creando reseña:", err);
    return null;
  }
};

export const actualizarReseniaController = async (
  idResenia: number,
  data: { comentarioResenia: string; valoracionResenia: number }
): Promise<Resenia | null> => {
  try {
    return await actualizarReseniaService(idResenia, data);
  } catch (err) {
    console.error("Error actualizando reseña:", err);
    return null;
  }
};

export const eliminarReseniaController = async (
  idResenia: number
): Promise<boolean> => {
  try {
    await eliminarReseniaService(idResenia);
    return true;
  } catch (err) {
    console.error("Error eliminando reseña:", err);
    return false;
  }
};

export const obtenerReseniasPorProyectoController = async (
  proyectoId: number
): Promise<Resenia[]> => {
  try {
    return await obtenerReseniasPorProyectoService(proyectoId);
  } catch (err) {
    console.error("Error cargando reseñas:", err);
    return [];
  }
};
