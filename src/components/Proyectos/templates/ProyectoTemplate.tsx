import type { Proyecto } from "../../../types/Proyecto.type";
import DetalleProyecto from "../organisms/DetalleProyecto";

interface Props {
  proyecto: Proyecto;
}

const ProyectoTemplate: React.FC<Props> = ({ proyecto }) => (
  <DetalleProyecto {...proyecto} promedio={5} linkProyecto={"#"} />
);

export default ProyectoTemplate;
