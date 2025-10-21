import api from "./api";
import type { Proyecto, ProyectoData } from "../types/Proyecto.type";

/**
 * Obtener proyecto por nombre
 */
export const obtenerProyectoPorNombre = async (
  nombre: string
): Promise<Proyecto> => {
  const encoded = encodeURIComponent(nombre);
  const { data } = await api.get(`/proyectos/nombre/${encoded}`);

  return {
    idProyecto: data.idProyecto,
    nombreProyecto: data.nombreProyecto,
    descripcioncortaProyecto: data.descripcioncortaProyecto,
    descripcionlargaProyecto: data.descripcionlargaProyecto,
    objetivoProyecto: data.objetivoProyecto,
    autorProyecto: data.autorProyecto,
    videoProyecto: data.videoProyecto,
    fechacreacionProyecto: data.fechacreacionProyecto,
    categoriaNombre: data.categoriaNombre ?? "Sin categoría",
    imagenesProyecto:
      data.imagenesProyecto?.map((img: any) => img.rutaImagen) ?? [],
    herramientasProyecto: data.herramientasProyecto ?? "",
    palabrasclaveProyecto: data.palabrasclaveProyecto ?? "",
    visualizacionesProyecto: data.visualizacionesProyecto ?? 0,
    reseniasProyecto:
      data.resenias?.map((r: any) => ({
        idResenia: r.idResenia,
        valoracion: r.valoracionResenia,
        comentario: r.comentarioResenia,
        usuarioNombres: r.usuarioNombres,
        usuarioApellidos: r.usuarioApellidos,
        fechaResenia: r.fechaResenia,
      })) ?? [],
    estadoProyecto: data.estadoProyecto ?? 0,
  };
};

/**
 * Listar todos los proyectos (usa el tipo Proyecto)
 */
export const obtenerProyectos = async (): Promise<Proyecto[]> => {
  const { data } = await api.get("/proyectos");

  // Algunos endpoints devuelven { content: [...] } y otros un array directo
  const proyectos: any[] = Array.isArray(data) ? data : data.content ?? [];

  return proyectos.map(
    (p: any): Proyecto => ({
      idProyecto: p.idProyecto,
      nombreProyecto: p.nombreProyecto,
      descripcioncortaProyecto: p.descripcioncortaProyecto,
      descripcionlargaProyecto: p.descripcionlargaProyecto,
      objetivoProyecto: p.objetivoProyecto,
      autorProyecto: p.autorProyecto,
      videoProyecto: p.videoProyecto,
      fechacreacionProyecto: p.fechacreacionProyecto,
      categoriaNombre: p.categoriaNombre ?? "Sin categoría",
      imagenesProyecto:
        p.imagenesProyecto?.map((img: any) => img.rutaImagen) ?? [],
      herramientasProyecto: p.herramientasProyecto ?? "",
      palabrasclaveProyecto: p.palabrasclaveProyecto ?? "",
      visualizacionesProyecto: p.visualizacionesProyecto ?? 0,
      estadoProyecto: p.estadoProyecto ?? 0,
    })
  );
};

/**
 * Listar proyectos más vistos
 */
export const listarProyectosMasVistos = async (
  limite = 10
): Promise<Proyecto[]> => {
  const { data } = await api.get(`/proyectos/mas-vistos?limite=${limite}`);

  const proyectos: any[] = Array.isArray(data) ? data : data.content ?? [];

  return proyectos.map(
    (p: any): Proyecto => ({
      idProyecto: p.idProyecto,
      nombreProyecto: p.nombreProyecto,
      descripcioncortaProyecto: p.descripcioncortaProyecto,
      descripcionlargaProyecto: p.descripcionlargaProyecto,
      objetivoProyecto: p.objetivoProyecto,
      autorProyecto: p.autorProyecto,
      videoProyecto: p.videoProyecto,
      fechacreacionProyecto: p.fechacreacionProyecto,
      categoriaNombre: p.categoriaNombre ?? "Sin categoría",
      imagenesProyecto:
        p.imagenesProyecto?.map((img: any) => img.rutaImagen) ?? [],
      herramientasProyecto: p.herramientasProyecto ?? "",
      palabrasclaveProyecto: p.palabrasclaveProyecto ?? "",
      visualizacionesProyecto: p.visualizacionesProyecto ?? 0,
      estadoProyecto: p.estadoProyecto ?? 0,
    })
  );
};

/**
 * Crear nuevo proyecto
 */
export const crearProyectoService = async (
  proyecto: ProyectoData
): Promise<Proyecto> => {
  const { data } = await api.post("/proyectos", proyecto);
  return data;
};
