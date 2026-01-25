import { z } from "zod";

const mensajeBasicos = "Completa todos los campos del paso Datos Básicos.";
const mensajeContenido =
  "Completa todos los campos del paso Contenido y Herramientas.";
const mensajeVideo = "Debes ingresar un video valido de YouTube.";

const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

export const proyectoDatosBasicosSchema = z.object({
  titulo: z.string().trim().min(1, mensajeBasicos),
  autor: z.string().trim().min(1, mensajeBasicos),
  objetivo: z.string().trim().min(1, mensajeBasicos),
  descripcionCorta: z.string().trim().min(1, mensajeBasicos),
});

export const proyectoContenidoSchema = z.object({
  categorias: z.array(z.string()).min(1, mensajeContenido),
  herramientas: z.array(z.string()).min(1, mensajeContenido),
  palabrasClave: z.array(z.string()),
  descripcionDetallada: z.string().trim().min(1, mensajeContenido),
});

export const proyectoImagenesCrearSchema = z.object({
  hero: z.instanceof(File, {
    message: "Debes subir una imágen principal.",
  }),
  galeria: z
    .array(z.instanceof(File))
    .min(3, "Debes subir al menos 3 imágenes."),
  video: z.string().trim().regex(youtubeRegex, mensajeVideo),
});

export const proyectoImagenesEditarSchema = z.object({
  video: z.string().trim().regex(youtubeRegex, mensajeVideo),
});
