import GaleriaProyecto from "../molecules/GaleriaProyecto";
import InfoProyecto from "../molecules/InfoProyecto";
import DescripcionLarga from "../molecules/DescripcionLarga";
import VideoProyecto from "../molecules/VideoProyecto";

interface Props {
  autor: string;
  fecha: string;
  tecnologias: string[];
  descripcionCorta: string;
  descripcionLarga: string;
  objetivos: string;
  palabrasClave: string[];
  imagenes: string[];
  video: string;
  titulo: string;
}

const ContenidoProyecto: React.FC<Props> = ({
  autor,
  fecha,
  tecnologias,
  descripcionCorta,
  descripcionLarga,
  objetivos,
  imagenes,
  video,
  titulo,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-start">
    {/* Galería fija */}
    <div className="order-1 md:order-1 md:sticky md:top-28 self-start h-fit">
      <GaleriaProyecto imagenes={imagenes} />
    </div>

    {/* Contenido desplazable */}
    <div className="order-2 md:order-2 space-y-8">
      <InfoProyecto
        autor={autor}
        tecnologias={tecnologias}
        fecha={fecha}
        descripcionCorta={descripcionCorta}
        objetivos={objetivos}
      />

      <DescripcionLarga descripcion={descripcionLarga} />

      <VideoProyecto videoUrl={video} titulo={titulo} />
    </div>
  </div>
);

export default ContenidoProyecto;
