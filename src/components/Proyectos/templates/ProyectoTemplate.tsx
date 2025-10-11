import DetalleProyecto from "../organisms/DetalleProyecto";

interface Proyecto {
  id: string;
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

interface Props {
  proyecto: Proyecto;
}

const ProyectoTemplate: React.FC<Props> = ({ proyecto }) => (
  <DetalleProyecto {...proyecto} />
);

export default ProyectoTemplate;
