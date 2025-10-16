import HeroProyectoIndividual from "../../Proyectos/organisms/HeroProyectoIndividual";
import ProyectoTemplate from "../../Proyectos/templates/ProyectoTemplate";

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
  };
}

const PasoRevision: React.FC<Props> = ({
  datosBasicos,
  contenido,
  imagenes,
}) => {
  const imagenesUrls = [
    ...(imagenes.hero ? [URL.createObjectURL(imagenes.hero)] : []),
    ...imagenes.galeria.map((img) => URL.createObjectURL(img)),
  ];

  const heroUrl = imagenes.hero
    ? URL.createObjectURL(imagenes.hero)
    : imagenesUrls.length > 0
    ? imagenesUrls[0]
    : "/images/hero.webp";

  const proyectoPreview = {
    id: "preview",
    titulo: datosBasicos.titulo || "Proyecto sin título",
    categoria: contenido.categorias[0] || "Sin categoría",
    promedio: 0,
    visitas: 0,
    autor: datosBasicos.autor || "Autor no definido",
    tecnologias: contenido.herramientas,
    fecha: new Date().toLocaleDateString("es-ES"),
    descripcionCorta: datosBasicos.descripcionCorta,
    descripcionLarga: contenido.descripcionDetallada,
    objetivos: datosBasicos.objetivo,
    linkProyecto: "#",
    palabrasClave: contenido.palabrasClave,
    imagenes: imagenesUrls.length ? imagenesUrls : ["/images/hero.webp"],
    video: imagenes.video || "",
    resenias: [],
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
        titulo={proyectoPreview.titulo}
        descripcion={proyectoPreview.objetivos}
        imagenFondo={heroUrl}
      />

      <ProyectoTemplate proyecto={proyectoPreview} />
    </div>
  );
};

export default PasoRevision;
