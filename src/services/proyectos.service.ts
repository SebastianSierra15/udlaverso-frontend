import api from "./api";
import type { Proyecto, ProyectoData } from "../types/Proyecto.type";
import type { Resenia } from "../types/Resenia.type";

/**
 * Obtener proyecto por nombre
 */
export const obtenerProyectoPorNombre = async (
  nombre: string
): Promise<Proyecto> => {
  const encoded = encodeURIComponent(nombre);
  const { data } = await api.get(`/proyectos/nombre/${encoded}`);

  const resenias: Resenia[] =
    data.resenias?.map((r: any) => ({
      idResenia: r.idResenia,
      valoracionResenia: r.valoracionResenia ?? 0,
      comentarioResenia: r.comentarioResenia ?? "",
      usuarioNombres: r.usuarioNombres ?? "",
      usuarioApellidos: r.usuarioApellidos ?? "",
      fechaResenia: r.fechaResenia ?? new Date().toISOString(),
    })) ?? [];

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
      data.imagenesProyecto?.map(
        (img: any) => `${import.meta.env.VITE_API_URL}${img.rutaImagen}`
      ) ?? [],
    herramientasProyecto: data.herramientasProyecto ?? "",
    palabrasclaveProyecto: data.palabrasclaveProyecto ?? "",
    visualizacionesProyecto: data.visualizacionesProyecto ?? 0,
    reseniasProyecto: resenias,
    estadoProyecto: data.estadoProyecto ?? 0,
    valoracionPromedio: data.valoracionPromedio ?? 0,
  };
};

/**
 * Listar todos los proyectos (usa el tipo Proyecto)
 */
export const listarProyectos = async (
  page = 0,
  size = 5,
  q = "",
  categoria = ""
): Promise<{
  content: Proyecto[];
  total: number;
  page: number;
  pages: number;
}> => {
  try {
    const { data } = await api.get("/proyectos", {
      params: { page, size, q, categoria },
    });

    if (!data || !data.content) {
      throw new Error("Respuesta inválida del servidor");
    }

    const proyectos: Proyecto[] = data.content.map((p: any) => ({
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
        p.imagenesProyecto?.map(
          (img: any) => `${import.meta.env.VITE_API_URL}${img.rutaImagen}`
        ) ?? [],
      herramientasProyecto: p.herramientasProyecto ?? "",
      palabrasclaveProyecto: p.palabrasclaveProyecto ?? "",
      visualizacionesProyecto: p.visualizacionesProyecto ?? 0,
      estadoProyecto: p.estadoProyecto ?? 0,
      valoracionPromedio: p.valoracionPromedio ?? 0,
    }));

    return {
      content: proyectos,
      total: data.total,
      page: data.page,
      pages: data.pages,
    };
  } catch (error) {
    console.error("❌ Error en listarProyectos:", error);
    throw new Error("Respuesta inválida del servidor");
  }
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
        p.imagenesProyecto?.map(
          (img: any) => `${import.meta.env.VITE_API_URL}${img.rutaImagen}`
        ) ?? [],
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
  proyecto: ProyectoData & { hero: File; galeria: File[] }
): Promise<Proyecto> => {
  const token = localStorage.getItem("token");
  const formData = new FormData();

  formData.append(
    "proyecto",
    new Blob([JSON.stringify(proyecto)], { type: "application/json" })
  );
  formData.append("hero", proyecto.hero);
  proyecto.galeria.forEach((img) => formData.append("galeria", img));

  const { data } = await api.post("/proyectos/con-imagenes", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
