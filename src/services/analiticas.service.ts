import api from "./api";

export interface AnaliticaPayload {
  idUsuario?: number | null;
  idProyecto?: number | null;
  idTipoAnalitica: number; // 1: vista, 2: click, 3: salida...
  descripcionAnalitica?: string;
}

export const registrarAnalitica = async (data: AnaliticaPayload) => {
  try {
    await api.post("/analiticas/registrar", data);
  } catch (error) {
    console.error("Error al registrar analítica:", error);
  }
};
