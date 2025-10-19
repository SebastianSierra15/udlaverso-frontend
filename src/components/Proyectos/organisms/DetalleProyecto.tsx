import type { Proyecto } from "../../../types/Proyecto";
import TituloAccionProyecto from "../molecules/TituloAccionProyecto";
import CategoriaSocialProyecto from "../molecules/CategoriaSocialProyecto";
import EstrellasValoracion from "../molecules/EstrellasValoracion";
import ContadorVisitas from "../atoms/ContadorVisitas";
import ContenidoProyecto from "./ContenidoProyecto";
import ReseniasProyecto from "./ReseniasProyecto";

type Props = Proyecto & {
  promedio: number;
  linkProyecto: string;
};

const DetalleProyecto: React.FC<Props> = ({
  nombre,
  categoria,
  promedio,
  visualizaciones,
  autor,
  herramientas,
  fechaCreacion,
  descripcionCorta,
  descripcionLarga,
  objetivo,
  video,
  palabrasClave,
  imagenes,
  resenias = [],
  linkProyecto,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-10 bg-white rounded-2xl shadow-sm -mt-10 relative z-10">
      <TituloAccionProyecto titulo={nombre} linkProyecto={linkProyecto} />
      <CategoriaSocialProyecto
        categoria={categoria ?? "General"}
        titulo={nombre}
      />

      <div className="flex items-center gap-2 mt-2">
        <EstrellasValoracion valor={promedio} interactiva={false} />
        <ContadorVisitas visitas={Number(visualizaciones) || 0} />
      </div>

      <ContenidoProyecto
        titulo={nombre}
        autor={autor}
        fecha={fechaCreacion ?? ""}
        tecnologias={herramientas?.split(",").map((h) => h.trim()) ?? []}
        descripcionCorta={descripcionCorta}
        descripcionLarga={descripcionLarga}
        objetivos={objetivo}
        palabrasClave={palabrasClave?.split(",").map((p) => p.trim()) ?? []}
        imagenes={imagenes ?? []}
        video={video ?? ""}
      />

      <ReseniasProyecto resenias={resenias} />
    </section>
  );
};

export default DetalleProyecto;
