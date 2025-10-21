import api from "./api";
import type { Proyecto, ProyectoData } from "../types/Proyecto";

export const obtenerProyectoPorNombre = async (
  nombre: string
): Promise<Proyecto> => {
  const encoded = encodeURIComponent(nombre);
  const { data } = await api.get(`/proyectos/nombre/${encoded}`);

  return {
    id: data.idProyecto,
    nombre: data.nombreProyecto,
    descripcionCorta: data.descripcioncortaProyecto,
    descripcionLarga: data.descripcionlargaProyecto,
    objetivo: data.objetivoProyecto,
    autor: data.autorProyecto,
    video: data.videoProyecto,
    fechaCreacion: data.fechacreacionProyecto,
    categoria: data.categoriaNombre ?? "Sin categoría",
    imagenes: data.imagenesProyecto?.map((img: any) => img.rutaImagen) ?? [],
    herramientas: data.herramientasProyecto ?? "",
    palabrasClave: data.palabrasclaveProyecto ?? "",
    visualizaciones: data.visualizacionesProyecto ?? "",
    resenias:
      data.resenias?.map((r: any) => ({
        idResenia: r.idResenia,
        valoracion: r.valoracionResenia,
        comentario: r.comentarioResenia,
        usuarioNombres: r.usuarioNombres,
        usuarioApellidos: r.usuarioApellidos,
        fechaResenia: r.fechaResenia,
      })) ?? [],
  };
};

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

export const listarProyectosMasVistos = async (
  limite = 10
): Promise<Proyecto[]> => {
  const { data } = await api.get(`/proyectos/mas-vistos?limite=${limite}`);

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

export const crearProyectoService = async (proyecto: ProyectoData) => {
  const { data } = await api.post("/proyectos", proyecto);
  return data;
};
