import { registrarAnalitica } from "../services/analiticas.service";

export const AnaliticaController = {
  registrarVistaProyecto: async (
    proyectoId: number,
    usuarioId?: number | null
  ) => {
    await registrarAnalitica({
      idProyecto: proyectoId,
      idUsuario: usuarioId || null,
      idTipoAnalitica: 1, // "vista"
      descripcionAnalitica: "Visualización de un proyecto",
    });
  },

  registrarClick: async (
    descripcion: string,
    usuarioId?: number | null,
    proyectoId?: number | null
  ) => {
    await registrarAnalitica({
      idUsuario: usuarioId || null,
      idProyecto: proyectoId || null,
      idTipoAnalitica: 2, // "click"
      descripcionAnalitica: descripcion,
    });
  },

  registrarSalida: async (usuarioId?: number | null) => {
    await registrarAnalitica({
      idUsuario: usuarioId || null,
      idTipoAnalitica: 3, // "salida"
      descripcionAnalitica: "Salida o cierre de sesión",
    });
  },

  registrarInicioSesion: async (usuarioId: number) => {
    await registrarAnalitica({
      idUsuario: usuarioId,
      idTipoAnalitica: 4, // sesion_inicio
      descripcionAnalitica: "Inicio de sesión del usuario",
    });
  },

  registrarCierreSesion: async (usuarioId: number) => {
    await registrarAnalitica({
      idUsuario: usuarioId,
      idTipoAnalitica: 5, // sesion_fin
      descripcionAnalitica: "Cierre de sesión del usuario",
    });
  },
};
