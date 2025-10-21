import type { Resenia } from "./Resenia";

export interface Proyecto {
  id: string | number;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  objetivo: string;
  autor: string;
  video?: string;
  fechaCreacion?: string;
  categoria?: string;
  imagenes?: string[];
  herramientas?: string;
  palabrasClave?: string;
  visualizaciones?: string;
  resenias?: Resenia[];
}

export type ProyectoData = {
  nombreProyecto: string;
  autorProyecto: string;
  objetivoProyecto: string;
  descripcioncortaProyecto: string;
  descripcionlargaProyecto: string;
  videoProyecto?: string;
  categoriaId?: number;
};
