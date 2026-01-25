import type { Proyecto } from "../../../types";
import { HeroProyectoIndividual, ProyectoTemplate } from "../../Proyectos";

interface Props {
  datosBasicos: {
    titulo: string;
    autor: string;
    objetivo: string;
    descripcionCorta: string;
  };
  contenido: {
    categorias: string[];
    herramientas: string[];
    palabrasClave: string[];
    descripcionDetallada: string;
  };
  imagenes: {
    hero: File | null;
    galeria: File[];
    video: string;
    heroUrl?: string;
    galeriaUrls?: string[];
  };
}

export const PasoRevision: React.FC<Props> = ({
  datosBasicos,
  contenido,
  imagenes,
}) => {
  const imagenesUrls = [
    ...(imagenes.hero
      ? [URL.createObjectURL(imagenes.hero)]
      : imagenes.heroUrl
        ? [imagenes.heroUrl]
        : []),
    ...(imagenes.galeria.length
      ? imagenes.galeria.map((img) => URL.createObjectURL(img))
      : imagenes.galeriaUrls || []),
  ];

  const heroUrl = imagenes.hero
    ? URL.createObjectURL(imagenes.hero)
    : imagenesUrls[0] || "/images/hero.webp";

  const proyectoPreview: Proyecto & {
    promedio: number;
    linkProyecto: string;
  } = {
    idProyecto: "preview",
    nombreProyecto: datosBasicos.titulo || "Proyecto sin título",
    categoriaNombre: contenido.categorias[0] || "Sin categoría",
    promedio: 0,
    visualizacionesProyecto: "0",
    autorProyecto: datosBasicos.autor || "Autor no definido",
    herramientasProyecto: contenido.herramientas.join(", "),
    fechacreacionProyecto: new Date().toISOString(),
    descripcioncortaProyecto: datosBasicos.descripcionCorta,
    descripcionlargaProyecto: contenido.descripcionDetallada,
    objetivoProyecto: datosBasicos.objetivo,
    linkProyecto: "#",
    palabrasclaveProyecto: contenido.palabrasClave.join(", "),
    imagenesProyecto: imagenesUrls.length
      ? imagenesUrls
      : ["/images/hero.webp"],
    videoProyecto: imagenes.video || "",
    reseniasProyecto: [],
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-udlaverso-negro">
          Revisión final
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Vista previa de cómo se verá tu proyecto públicamente:
        </p>
      </div>

      <HeroProyectoIndividual
        titulo={proyectoPreview.nombreProyecto}
        descripcion={proyectoPreview.objetivoProyecto}
        imagenFondo={heroUrl}
      />

      <ProyectoTemplate proyecto={proyectoPreview} />
    </div>
  );
};
