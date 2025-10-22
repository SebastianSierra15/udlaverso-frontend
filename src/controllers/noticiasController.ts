import * as noticiasService from "../services/noticias.service";

export const obtenerNoticiaPorTitulo = async (titulo: string) => {
  try {
    return await noticiasService.obtenerNoticiaPorTitulo(titulo);
  } catch (error) {
    console.error("Error al obtener noticia por título:", error);
    return null;
  }
};

export const obtenerNoticias = async (
  page = 0,
  size = 5,
  q = "",
  orden = "desc"
) => {
  try {
    return await noticiasService.listarNoticias(page, size, q, orden);
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    return { content: [], total: 0, page: 0, pages: 0 };
  }
};

export const obtenerNoticiasRecientes = async () => {
  try {
    return await noticiasService.listarNoticiasRecientes();
  } catch (error) {
    console.error("Error al obtener noticias recientes:", error);
    return [];
  }
};

export const obtenerNoticia = async (id: number) => {
  try {
    return await noticiasService.obtenerNoticiaPorId(id);
  } catch (error) {
    console.error("Error al obtener noticia:", error);
    return null;
  }
};
