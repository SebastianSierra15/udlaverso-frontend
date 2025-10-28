import type { Resenia } from "./Resenia.type";

export interface Proyecto {
  idProyecto: string | number;
  nombreProyecto: string;
  descripcioncortaProyecto: string;
  descripcionlargaProyecto: string;
  objetivoProyecto: string;
  autorProyecto: string;
  videoProyecto?: string;
  fechacreacionProyecto?: string;
  categoriaNombre?: string;
  imagenesProyecto?: string[];
  herramientasProyecto?: string;
  palabrasclaveProyecto?: string;
  visualizacionesProyecto?: string;
  reseniasProyecto?: Resenia[];
  estadoProyecto?: number;
  valoracionPromedio?: number;
}

export type ProyectoData = {
  idProyecto?: number;
  nombreProyecto: string;
  autorProyecto: string;
  objetivoProyecto: string;
  descripcioncortaProyecto: string;
  descripcionlargaProyecto: string;
  videoProyecto?: string;
  categoriaId?: number;
  herramientasProyecto?: string;
  palabrasclaveProyecto?: string;
  imagenesEliminadas?: string[];
  hero?: File;
  galeria?: File[];
};
