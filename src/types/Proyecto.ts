export interface Proyecto {
  id: number;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  objetivo: string;
  autor: string;
  video?: string;
  fechaCreacion?: string;
  categoria?: string;
  imagenes?: string[];
}
