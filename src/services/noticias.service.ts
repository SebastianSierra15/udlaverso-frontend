import api from "./api";
import type { Noticia } from "../types/Noticia.type";

export const obtenerNoticiaPorTitulo = async (
  titulo: string
): Promise<Noticia> => {
  const encoded = encodeURIComponent(titulo);
  const { data } = await api.get<Noticia>(`/noticias/titulo/${encoded}`);
  return data;
};

export const listarNoticias = async (
  page = 0,
  size = 5,
  q = "",
  orden = "desc"
): Promise<{
  content: Noticia[];
  total: number;
  page: number;
  pages: number;
}> => {
  const { data } = await api.get("/noticias", {
    params: { page, size, q, orden },
  });

  return {
    content: data.content ?? [],
    total: data.total ?? 0,
    page: data.page ?? 0,
    pages: data.pages ?? 0,
  };
};

export const listarNoticiasRecientes = async (): Promise<Noticia[]> => {
  const { data } = await api.get<Noticia[]>("/noticias/recientes");
  return data;
};

export const obtenerNoticiaPorId = async (id: number): Promise<Noticia> => {
  const { data } = await api.get<Noticia>(`/noticias/${id}`);
  return data;
};
