import BloqueAutorFecha from "../molecules/BloqueAutorFecha";
import ListaTecnologias from "../molecules/ListaTecnologias";
import BloqueDescripcion from "../molecules/BloqueDescripcion";
import BloqueObjetivos from "../molecules/BloqueObjetivos";

interface Props {
  autor: string;
  fecha: string;
  tecnologias: string[];
  descripcionCorta: string;
  objetivos: string;
}

const InfoProyecto: React.FC<Props> = ({
  autor,
  fecha,
  tecnologias,
  descripcionCorta,
  objetivos,
}) => (
  <div className="space-y-4 font-inter text-base text-udlaverso-gris leading-relaxed">
    <BloqueAutorFecha autor={autor} fecha={fecha} />

    <ListaTecnologias tecnologias={tecnologias} />

    <BloqueDescripcion descripcion={descripcionCorta} />

    <BloqueObjetivos objetivos={objetivos} />
  </div>
);

export default InfoProyecto;
