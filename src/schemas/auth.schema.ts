import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^_])[A-Za-z\d@$!%*?&.#^_]{8,64}$/;
const emailSchema = z.email("Correo inválido.");

const validarCorreo = (
  correo: string,
  esInstitucional: boolean,
  ctx: z.RefinementCtx,
) => {
  const correoLimpio = correo.trim();

  if (esInstitucional) {
    if (correoLimpio.includes("@")) {
      ctx.addIssue({
        code: "custom",
        path: ["correo"],
        message: "Ingresa solo el usuario sin @udla.edu.co.",
      });
    }
    return;
  }

  const esEmail = emailSchema.safeParse(correoLimpio).success;
  if (!esEmail) {
    ctx.addIssue({
      code: "custom",
      path: ["correo"],
      message: "Correo inválido.",
    });
  }

  if (correoLimpio.toLowerCase().endsWith("@udla.edu.co")) {
    ctx.addIssue({
      code: "custom",
      path: ["correo"],
      message:
        "Usa la opción institucional si el correo termina en @udla.edu.co.",
    });
  }
};

export const loginSchema = z.object({
  correo: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo.")
    .refine((value) => emailSchema.safeParse(value).success, {
      message: "Correo inválido.",
    }),
  contrasenia: z.string().trim().min(1, "Ingresa tu contraseña."),
});

export const registroCorreoSchema = z
  .object({
    correo: z.string().trim().min(1, "Debes ingresar un correo."),
    esInstitucional: z.boolean(),
  })
  .superRefine((data, ctx) => {
    validarCorreo(data.correo, data.esInstitucional, ctx);
  });

export const registroSchema = z
  .object({
    nombre: z.string().trim().min(1, "El nombre es obligatorio."),
    apellido: z.string().trim().min(1, "El apellido es obligatorio."),
    correo: z.string().trim().min(1, "El correo es obligatorio."),
    universidad: z.string().trim().optional(),
    contrasena: z
      .string()
      .min(8, "La contraseña debe tener entre 8 y 64 caracteres.")
      .max(64, "La contraseña debe tener entre 8 y 64 caracteres.")
      .regex(
        passwordRegex,
        "La contraseña debe incluir mayúscula, minúscula, número y caracter especial.",
      ),
    confirmarContrasena: z.string().min(1, "Confirma la contraseña."),
    terminos: z.boolean(),
    esInstitucional: z.boolean(),
  })
  .superRefine((data, ctx) => {
    validarCorreo(data.correo, data.esInstitucional, ctx);

    if (!data.esInstitucional && !data.universidad?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["universidad"],
        message: "La universidad es obligatoria.",
      });
    }

    if (data.contrasena !== data.confirmarContrasena) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmarContrasena"],
        message: "Las contraseñas no coinciden.",
      });
    }

    if (!data.terminos) {
      ctx.addIssue({
        code: "custom",
        path: ["terminos"],
        message: "Debes aceptar los términos y condiciones.",
      });
    }
  });
