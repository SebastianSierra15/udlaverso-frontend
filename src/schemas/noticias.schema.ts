import { z } from "zod";

const mensajeRequerido = "Completa los campos requeridos.";

const noticiaBaseSchema = z.object({
  titulo: z.string().trim().min(1, mensajeRequerido),
  contenido: z.string().trim().min(1, mensajeRequerido),
});

export const noticiaCrearSchema = noticiaBaseSchema.extend({
  imagen: z.instanceof(File, {
    message: "Completa todos los campos antes de guardar.",
  }),
});

export const noticiaEditarSchema = noticiaBaseSchema;
