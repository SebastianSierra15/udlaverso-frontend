import api from "./api";
import type { Noticia } from "../types/Noticia.type";

export const obtenerNoticiaPorTitulo = async (
  titulo: string
): Promise<Noticia> => {
  const encoded = encodeURIComponent(titulo);
  const { data } = await api.get<Noticia>(`/noticias/titulo/${encoded}`);
  return data;
};

export const listarNoticias = async (): Promise<Noticia[]> => {
  const { data } = await api.get<Noticia[]>("/noticias");
  return data;
};

export const listarNoticiasRecientes = async (): Promise<Noticia[]> => {
  const { data } = await api.get<Noticia[]>("/noticias");
  // Ordena por fecha y trae las 6 más recientes
  return data
    .sort(
      (a, b) =>
        new Date(b.fechapublicacionNoticia).getTime() -
        new Date(a.fechapublicacionNoticia).getTime()
    )
    .slice(0, 6);
};

export const obtenerNoticiaPorId = async (id: number): Promise<Noticia> => {
  const { data } = await api.get<Noticia>(`/noticias/${id}`);
  return data;
};
