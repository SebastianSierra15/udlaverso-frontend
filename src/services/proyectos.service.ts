import api from "./api";
import { appConfig } from "../config";
import { STORAGE_KEYS } from "../constants";
import type { Proyecto, ProyectoData } from "../types/Proyecto.type";
import type { Resenia } from "../types/Resenia.type";

type ImagenApi = {
  rutaImagen?: string;
};

type ReseniaApi = {
  idResenia?: number;
  valoracionResenia?: number;
  comentarioResenia?: string;
  usuarioId?: number;
  usuarioNombres?: string;
  usuarioApellidos?: string;
  fechaResenia?: string;
};

type ProyectoApi = {
  idProyecto?: number;
  nombreProyecto?: string;
  descripcioncortaProyecto?: string;
  descripcionlargaProyecto?: string;
  objetivoProyecto?: string;
  autorProyecto?: string;
  videoProyecto?: string;
  fechacreacionProyecto?: string;
  categoriaNombre?: string;
  imagenesProyecto?: ImagenApi[];
  herramientasProyecto?: string;
  palabrasclaveProyecto?: string;
  visualizacionesProyecto?: number;
  resenias?: ReseniaApi[];
  estadoProyecto?: number;
  valoracionPromedio?: number;
};

type ProyectosListApi = {
  content?: ProyectoApi[];
  total?: number;
  page?: number;
  pages?: number;
};

type ProyectosMasVistosApi = ProyectoApi[] | { content?: ProyectoApi[] };

/**
 * Obtener proyecto por nombre
 */
export const obtenerProyectoPorNombre = async (
  nombre: string
): Promise<Proyecto> => {
  const encoded = encodeURIComponent(nombre);
  const { data } = await api.get<ProyectoApi>(`/proyectos/nombre/${encoded}`);

  const resenias: Resenia[] = Array.isArray(data.resenias)
    ? data.resenias.map((r) => ({
        idResenia: r.idResenia ?? 0,
        valoracionResenia: r.valoracionResenia ?? 0,
        comentarioResenia: r.comentarioResenia ?? "",
        usuarioNombres: r.usuarioNombres ?? "",
        usuarioApellidos: r.usuarioApellidos ?? "",
        usuarioId: r.usuarioId ?? 0,
        fechaResenia: r.fechaResenia ?? new Date().toISOString(),
      }))
    : [];

  return {
    idProyecto: data.idProyecto ?? 0,
    nombreProyecto: data.nombreProyecto ?? "",
    descripcioncortaProyecto: data.descripcioncortaProyecto ?? "",
    descripcionlargaProyecto: data.descripcionlargaProyecto ?? "",
    objetivoProyecto: data.objetivoProyecto ?? "",
    autorProyecto: data.autorProyecto ?? "",
    videoProyecto: data.videoProyecto,
    fechacreacionProyecto: data.fechacreacionProyecto,
    categoriaNombre: data.categoriaNombre ?? "Sin categoría",
    imagenesProyecto: Array.isArray(data.imagenesProyecto)
      ? data.imagenesProyecto.map(
          (img) => `${appConfig.apiUrl}${img.rutaImagen ?? ""}`
        )
      : [],
    herramientasProyecto: data.herramientasProyecto ?? "",
    palabrasclaveProyecto: data.palabrasclaveProyecto ?? "",
    visualizacionesProyecto:
      data.visualizacionesProyecto == null
        ? undefined
        : String(data.visualizacionesProyecto),
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
    const { data } = await api.get<ProyectosListApi>("/proyectos", {
      params: { page, size, q, categoria },
    });

    if (!data || !Array.isArray(data.content)) {
      throw new Error("Respuesta inválida del servidor");
    }

    const proyectos: Proyecto[] = data.content.map((p) => ({
      idProyecto: p.idProyecto ?? 0,
      nombreProyecto: p.nombreProyecto ?? "",
      descripcioncortaProyecto: p.descripcioncortaProyecto ?? "",
      descripcionlargaProyecto: p.descripcionlargaProyecto ?? "",
      objetivoProyecto: p.objetivoProyecto ?? "",
      autorProyecto: p.autorProyecto ?? "",
      videoProyecto: p.videoProyecto,
      fechacreacionProyecto: p.fechacreacionProyecto,
      categoriaNombre: p.categoriaNombre ?? "Sin categoría",
      imagenesProyecto: Array.isArray(p.imagenesProyecto)
        ? p.imagenesProyecto.map(
            (img) => `${appConfig.apiUrl}${img.rutaImagen ?? ""}`
          )
        : [],
      herramientasProyecto: p.herramientasProyecto ?? "",
      palabrasclaveProyecto: p.palabrasclaveProyecto ?? "",
      visualizacionesProyecto:
        p.visualizacionesProyecto == null
          ? undefined
          : String(p.visualizacionesProyecto),
      estadoProyecto: p.estadoProyecto ?? 0,
      valoracionPromedio: p.valoracionPromedio ?? 0,
    }));

    return {
      content: proyectos,
      total: data.total ?? 0,
      page: data.page ?? 0,
      pages: data.pages ?? 0,
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
  const { data } = await api.get<ProyectosMasVistosApi>(
    `/proyectos/mas-vistos?limite=${limite}`
  );

  const proyectos: ProyectoApi[] = Array.isArray(data)
    ? data
    : Array.isArray(data.content)
      ? data.content
      : [];

  return proyectos.map(
    (p): Proyecto => ({
      idProyecto: p.idProyecto ?? 0,
      nombreProyecto: p.nombreProyecto ?? "",
      descripcioncortaProyecto: p.descripcioncortaProyecto ?? "",
      descripcionlargaProyecto: p.descripcionlargaProyecto ?? "",
      objetivoProyecto: p.objetivoProyecto ?? "",
      autorProyecto: p.autorProyecto ?? "",
      videoProyecto: p.videoProyecto,
      fechacreacionProyecto: p.fechacreacionProyecto,
      categoriaNombre: p.categoriaNombre ?? "Sin categoría",
      imagenesProyecto: Array.isArray(p.imagenesProyecto)
        ? p.imagenesProyecto.map(
            (img) => `${appConfig.apiUrl}${img.rutaImagen ?? ""}`
          )
        : [],
      herramientasProyecto: p.herramientasProyecto ?? "",
      palabrasclaveProyecto: p.palabrasclaveProyecto ?? "",
      visualizacionesProyecto:
        p.visualizacionesProyecto == null
          ? undefined
          : String(p.visualizacionesProyecto),
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
  const token = localStorage.getItem(STORAGE_KEYS.token);
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

export async function validarNombreProyecto(
  nombre: string,
  excluirId?: number
) {
  const { data } = await api.get("/proyectos/validar-nombre", {
    params: { nombre, excluirId },
  });
  return data as { disponible: boolean };
}

export async function actualizarProyectoService(
  id: number,
  payload: ProyectoData
) {
  const token = localStorage.getItem(STORAGE_KEYS.token);

  const { data } = await api.put(`/proyectos/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return data as Proyecto;
}

/**
 * Actualizar proyecto con imágenes
 */
export const actualizarProyectoConImagenesService = async (
  id: number,
  proyecto: ProyectoData & {
    hero?: File;
    galeria?: File[];
    imagenesEliminadas?: string[];
  }
): Promise<Proyecto> => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  const formData = new FormData();

  formData.append(
    "proyecto",
    new Blob([JSON.stringify(proyecto)], { type: "application/json" })
  );

  if (proyecto.hero) formData.append("hero", proyecto.hero);
  proyecto.galeria?.forEach((img) => formData.append("galeria", img));

  if (proyecto.imagenesEliminadas && proyecto.imagenesEliminadas.length > 0) {
    formData.append(
      "imagenesEliminadas",
      new Blob([JSON.stringify(proyecto.imagenesEliminadas)], {
        type: "application/json",
      })
    );
  }

  const { data } = await api.put(`/proyectos/${id}/con-imagenes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

/**
 * Eliminar proyecto (eliminación lógica)
 */
export const eliminarProyectoService = async (id: number): Promise<void> => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  await api.delete(`/proyectos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
