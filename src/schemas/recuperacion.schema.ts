import { z } from "zod";
import { emailSchema, passwordSchema } from "./auth.schema";

const codigoSchema = z
  .string()
  .trim()
  .min(1, "Ingresa el código.")
  .max(6, "El código debe tener máximo 6 caracteres.");

export const codigoVerificacionSchema = z.object({
  codigo: codigoSchema,
});

export const recuperacionCorreoSchema = z.object({
  correo: z
    .string()
    .trim()
    .min(1, "Debes ingresar un correo.")
    .refine((value) => emailSchema.safeParse(value).success, {
      message: "Correo invalido.",
    }),
});

export const recuperacionCodigoSchema = z.object({
  correo: z
    .string()
    .trim()
    .min(1, "Debes ingresar un correo.")
    .refine((value) => emailSchema.safeParse(value).success, {
      message: "Correo invalido.",
    }),
  codigo: codigoSchema,
});

export const recuperacionRestablecerSchema = z
  .object({
    correo: z
      .string()
      .trim()
      .min(1, "Debes ingresar un correo.")
      .refine((value) => emailSchema.safeParse(value).success, {
        message: "Correo invalido.",
      }),
    codigo: codigoSchema,
    nueva: passwordSchema,
    confirmar: z.string().min(1, "Confirma la contraseña."),
  })
  .superRefine((data, ctx) => {
    if (data.nueva !== data.confirmar) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmar"],
        message: "Las contraseñas no coinciden.",
      });
    }
  });

export const recuperacionRestablecerPayloadSchema = z.object({
  correo: z
    .string()
    .trim()
    .min(1, "Debes ingresar un correo.")
    .refine((value) => emailSchema.safeParse(value).success, {
      message: "Correo invalido.",
    }),
  codigo: codigoSchema,
  nueva: passwordSchema,
});
