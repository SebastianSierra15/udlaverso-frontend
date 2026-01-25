import { z } from "zod";

export const reseniaSchema = z.object({
  comentario: z
    .string()
    .trim()
    .min(1, "Escribe un comentario.")
    .max(500, "El comentario no debe superar 500 caracteres."),
  estrellas: z
    .number()
    .int("Selecciona una valoración.")
    .min(1, "Selecciona una valoración.")
    .max(5, "La valoración máxima es 5."),
});
