import { BloqueAutorFecha } from "./BloqueAutorFecha";
import { ListaTecnologias } from "./ListaTecnologias";
import { BloqueDescripcion } from "./BloqueDescripcion";
import { BloqueObjetivos } from "./BloqueObjetivos";

interface Props {
  autor: string;
  fecha: string;
  tecnologias: string[];
  descripcionCorta: string;
  objetivos: string;
}

export const InfoProyecto: React.FC<Props> = ({
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
