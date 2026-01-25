import api from "./api";
import { appConfig } from "../config";
import { STORAGE_KEYS } from "../constants";
import type { Noticia } from "../types/Noticia.type";

type NoticiaApi = {
  idNoticia?: number;
  tituloNoticia?: string;
  contenidoNoticia?: string;
  fechapublicacionNoticia?: string;
  imagenNoticia?: string | null;
  estadoNoticia?: number;
};

type NoticiasListApi = {
  content?: NoticiaApi[];
  total?: number;
  page?: number;
  pages?: number;
};

export type NoticiaPayload = {
  tituloNoticia: string;
  contenidoNoticia: string;
  estadoNoticia?: number;
  [key: string]: unknown;
};

/**
 * Agrega el dominio base a las rutas de imagen
 */
const mapearNoticia = (n: NoticiaApi): Noticia => ({
  idNoticia: n.idNoticia ?? 0,
  tituloNoticia: n.tituloNoticia ?? "",
  contenidoNoticia: n.contenidoNoticia ?? "",
  fechapublicacionNoticia: n.fechapublicacionNoticia ?? null,
  imagenNoticia: n.imagenNoticia
    ? `${appConfig.apiUrl}${n.imagenNoticia}`
    : null,
  estadoNoticia: n.estadoNoticia ?? 0,
});

/**
 * Obtener noticia por título
 */
export const obtenerNoticiaPorTitulo = async (
  titulo: string
): Promise<Noticia> => {
  const encoded = encodeURIComponent(titulo);
  const { data } = await api.get<NoticiaApi>(`/noticias/titulo/${encoded}`);
  return mapearNoticia(data);
};

/**
 * Listar noticias paginadas
 */
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
  const { data } = await api.get<NoticiasListApi>("/noticias", {
    params: { page, size, q, orden },
  });

  const noticias: Noticia[] = Array.isArray(data.content)
    ? data.content.map((n) => mapearNoticia(n))
    : [];

  return {
    content: noticias,
    total: data.total ?? 0,
    page: data.page ?? 0,
    pages: data.pages ?? 0,
  };
};

/**
 * Listar noticias recientes
 */
export const listarNoticiasRecientes = async (): Promise<Noticia[]> => {
  const { data } = await api.get<NoticiaApi[]>("/noticias/recientes");
  return Array.isArray(data) ? data.map((n) => mapearNoticia(n)) : [];
};

/**
 * Obtener noticia por ID
 */
export const obtenerNoticiaPorId = async (id: number): Promise<Noticia> => {
  const { data } = await api.get<NoticiaApi>(`/noticias/${id}`);
  return mapearNoticia(data);
};

/**
 * Crear noticia con imagen
 */
export const crearNoticia = async (noticia: NoticiaPayload, imagen: File) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  const formData = new FormData();

  formData.append(
    "noticia",
    new Blob([JSON.stringify(noticia)], { type: "application/json" })
  );
  formData.append("imagen", imagen);

  const { data } = await api.post("/noticias/con-imagen", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return mapearNoticia(data);
};

/**
 * Actualizar noticia con o sin imagen
 */
export const actualizarNoticiaConImagen = async (
  id: number,
  noticia: NoticiaPayload,
  imagen?: File
) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  const formData = new FormData();

  formData.append(
    "noticia",
    new Blob([JSON.stringify(noticia)], { type: "application/json" })
  );

  if (imagen) {
    formData.append("imagen", imagen);
  }

  const { data } = await api.put(`/noticias/${id}/con-imagen`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return mapearNoticia(data);
};

/**
 * Eliminar noticia (cambio de estado + eliminación de imagen)
 */
export const eliminarNoticia = async (id: number) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  const { data } = await api.delete(`/noticias/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
