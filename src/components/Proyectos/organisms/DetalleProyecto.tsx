import TituloProyecto from "../atoms/TituloProyecto";
import EtiquetaCategoria from "../atoms/EtiquetaCategoria";
import ContenidoProyecto from "./ContenidoProyecto";
import ReseniasProyecto from "./ReseniasProyecto";

interface Props {
  titulo: string;
  categoria: string;
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
      <TituloProyecto texto={titulo} />

      <EtiquetaCategoria categoria={categoria} />

      <ContenidoProyecto
        titulo={titulo}
        autor={autor}
        fecha={fecha}
        tecnologias={tecnologias}
        descripcionCorta={descripcionCorta}
        descripcionLarga={descripcionLarga}
        objetivos={objetivos}
        linkProyecto={linkProyecto}
        palabrasClave={palabrasClave}
        imagenes={imagenes}
        video={video}
      />

      <ReseniasProyecto resenias={resenias} />
    </section>
  );
};

export default DetalleProyecto;
