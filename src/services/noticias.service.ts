import api from "./api";
import type { Noticia } from "../types/Noticia.type";

/**
 * Agrega el dominio base a las rutas de imagen
 */
const mapearNoticia = (n: any): Noticia => ({
  idNoticia: n.idNoticia,
  tituloNoticia: n.tituloNoticia,
  contenidoNoticia: n.contenidoNoticia,
  fechapublicacionNoticia: n.fechapublicacionNoticia,
  imagenNoticia: n.imagenNoticia
    ? `${import.meta.env.VITE_API_URL}${n.imagenNoticia}`
    : null,
  estadoNoticia: n.estadoNoticia,
});

/**
 * Obtener noticia por título
 */
export const obtenerNoticiaPorTitulo = async (
  titulo: string
): Promise<Noticia> => {
  const encoded = encodeURIComponent(titulo);
  const { data } = await api.get(`/noticias/titulo/${encoded}`);
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
  const { data } = await api.get("/noticias", {
    params: { page, size, q, orden },
  });

  const noticias: Noticia[] =
    data.content?.map((n: any) => mapearNoticia(n)) ?? [];

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
  const { data } = await api.get("/noticias/recientes");
  return data.map((n: any) => mapearNoticia(n));
};

/**
 * Obtener noticia por ID
 */
export const obtenerNoticiaPorId = async (id: number): Promise<Noticia> => {
  const { data } = await api.get(`/noticias/${id}`);
  return mapearNoticia(data);
};

/**
 * Crear noticia con imagen
 */
export const crearNoticia = async (noticia: any, imagen: File) => {
  const token = localStorage.getItem("token");
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
  noticia: any,
  imagen?: File
) => {
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
  const { data } = await api.delete(`/noticias/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
