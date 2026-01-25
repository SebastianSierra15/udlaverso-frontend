import type { Proyecto } from "../../../types";
import { DetalleProyecto } from "../organisms";

interface Props {
  proyecto: Proyecto;
}

export const ProyectoTemplate: React.FC<Props> = ({ proyecto }) => (
  <DetalleProyecto {...proyecto} linkProyecto={"#"} />
);
