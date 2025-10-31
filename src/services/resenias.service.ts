import api from "./api";
import type { Resenia } from "../types/Resenia.type";

export const crearReseniaService = async (
  proyectoId: number,
  data: {
    comentarioResenia: string;
    valoracionResenia: number;
  },
  token: string
) => {
  const { data: res } = await api.post(`/resenias/${proyectoId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res as Resenia;
};

export const actualizarReseniaService = async (
  idResenia: number,
  data: {
    comentarioResenia: string;
    valoracionResenia: number;
  },
  token: string
) => {
  const { data: res } = await api.put(`/resenias/${idResenia}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res as Resenia;
};

export const eliminarReseniaService = async (
  idResenia: number,
  token: string
) => {
  await api.delete(`/resenias/${idResenia}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const obtenerReseniasPorProyectoService = async (proyectoId: number) => {
  const { data } = await api.get(`/resenias/proyecto/${proyectoId}`);
  return data as Resenia[];
};
