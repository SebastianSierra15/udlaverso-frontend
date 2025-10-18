import api from "./api";
import type { Proyecto } from "../types/Proyecto";

// GET
export const obtenerProyectos = async (): Promise<Proyecto[]> => {
  const { data } = await api.get("/proyectos");

  const proyectos = Array.isArray(data) ? data : data.content ?? [];

  return proyectos.map((p: any) => ({
    id: p.idProyecto,
    nombre: p.nombreProyecto,
    descripcionCorta: p.descripcioncortaProyecto,
    descripcionLarga: p.descripcionlargaProyecto,
    objetivo: p.objetivoProyecto,
    autor: p.autorProyecto,
    video: p.videoProyecto,
    fechaCreacion: p.fechacreacionProyecto,
    categoria: p.categoriaNombre ?? "Sin categoría",
    imagenes: p.imagenesProyecto?.map((img: any) => img.rutaImagen) ?? [],
  }));
};

// POST
interface ProyectoData {
  nombreProyecto: string;
  autorProyecto: string;
  objetivoProyecto: string;
  descripcioncortaProyecto: string;
  descripcionlargaProyecto: string;
  videoProyecto?: string;
  categoriaId?: number;
}

export const crearProyectoService = async (proyecto: ProyectoData) => {
  const { data } = await api.post("/proyectos", proyecto);
  return data;
};
