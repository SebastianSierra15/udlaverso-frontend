import BloqueAutorFecha from "../molecules/BloqueAutorFecha";
import ListaTecnologias from "../molecules/ListaTecnologias";
import BloqueDescripcion from "../molecules/BloqueDescripcion";
import BloqueObjetivos from "../molecules/BloqueObjetivos";
import AccionesProyecto from "../molecules/AccionesProyecto";

interface Props {
  autor: string;
  fecha: string;
  tecnologias: string[];
  descripcionCorta: string;
  objetivos: string;
  linkProyecto: string;
  linkGuia?: string;
}

const InfoProyecto: React.FC<Props> = ({
  autor,
  fecha,
  tecnologias,
  descripcionCorta,
  objetivos,
  linkProyecto,
  linkGuia,
}) => (
  <div className="space-y-6 font-inter text-[15px] text-udlaverso-gris leading-relaxed">
    <BloqueAutorFecha autor={autor} fecha={fecha} />

    <ListaTecnologias tecnologias={tecnologias} />

    <BloqueDescripcion descripcion={descripcionCorta} />

    <BloqueObjetivos objetivos={objetivos} />

    <AccionesProyecto linkProyecto={linkProyecto} linkGuia={linkGuia} />
  </div>
);

export default InfoProyecto;
