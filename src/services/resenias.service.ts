import api from "./api";
import type { Resenia } from "../types/Resenia.type";

export const crearReseniaService = async (
  proyectoId: number,
  data: {
    comentarioResenia: string;
    valoracionResenia: number;
  }
) => {
  const { data: res } = await api.post(`/resenias/${proyectoId}`, data);
  return res as Resenia;
};

export const actualizarReseniaService = async (
  idResenia: number,
  data: {
    comentarioResenia: string;
    valoracionResenia: number;
  }
) => {
  const { data: res } = await api.put(`/resenias/${idResenia}`, data);
  return res as Resenia;
};

export const eliminarReseniaService = async (idResenia: number) => {
  await api.delete(`/resenias/${idResenia}`);
};

export const obtenerReseniasPorProyectoService = async (proyectoId: number) => {
  const { data } = await api.get(`/resenias/proyecto/${proyectoId}`);
  return data as Resenia[];
};
