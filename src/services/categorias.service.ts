import api from "./api";

export const obtenerCategorias = async () => {
  try {
    const response = await api.get("/categorias");
    return response.data;
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    return [];
  }
};
