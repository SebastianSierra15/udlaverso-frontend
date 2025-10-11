import TituloAccionProyecto from "../molecules/TituloAccionProyecto";
import CategoriaSocialProyecto from "../molecules/CategoriaSocialProyecto";
import EstrellasValoracion from "../molecules/EstrellasValoracion";
import ContadorVisitas from "../atoms/ContadorVisitas";
import ContenidoProyecto from "./ContenidoProyecto";
import ReseniasProyecto from "./ReseniasProyecto";

interface Props {
  titulo: string;
  categoria: string;
  promedio: number;
  visitas: number;
  autor: string;
  tecnologias: string[];
  fecha: string;
  descripcionCorta: string;
  descripcionLarga: string;
  objetivos: string;
  linkProyecto: string;
  palabrasClave: string[];
  imagenes: string[];
  video: string;
  resenias?: {
    usuario: string;
    comentario: string;
    estrellas: number;
    fecha: string;
  }[];
}

const DetalleProyecto: React.FC<Props> = ({
  titulo,
  categoria,
  promedio,
  visitas,
  autor,
  tecnologias,
  fecha,
  descripcionCorta,
  descripcionLarga,
  objetivos,
  linkProyecto,
  palabrasClave,
  imagenes,
  video,
  resenias = [],
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-10 bg-white rounded-2xl shadow-sm -mt-10 relative z-10">
      <TituloAccionProyecto titulo={titulo} linkProyecto={linkProyecto} />

      <CategoriaSocialProyecto categoria={categoria} titulo={titulo} />

      <div className="flex items-center gap-2 mt-2">
        <EstrellasValoracion valor={promedio} interactiva={false} />
        <ContadorVisitas visitas={visitas} />
      </div>

      <ContenidoProyecto
        titulo={titulo}
        autor={autor}
        fecha={fecha}
        tecnologias={tecnologias}
        descripcionCorta={descripcionCorta}
        descripcionLarga={descripcionLarga}
        objetivos={objetivos}
        palabrasClave={palabrasClave}
        imagenes={imagenes}
        video={video}
      />

      <ReseniasProyecto resenias={resenias} />
    </section>
  );
};

export default DetalleProyecto;
