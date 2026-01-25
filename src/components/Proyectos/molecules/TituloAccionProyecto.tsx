import { TituloProyecto } from "../atoms";
import { Boton } from "../../Shared";

interface Props {
  titulo: string;
  linkProyecto?: string;
}

export const TituloAccionProyecto: React.FC<Props> = ({
  titulo,
  linkProyecto,
}) => {
  const enlace =
    linkProyecto?.trim() ||
    "https://www.mediafire.com/file/yi7wyivkcffq3lb/UA3D-Viwer.exe";

  const abrirProyecto = () => window.open(enlace, "_blank");

  return (
    <div className="flex justify-between items-start md:items-center gap-4">
      <TituloProyecto texto={titulo} />

      <Boton
        texto="Visitar proyecto"
        onClick={abrirProyecto}
        variante="principal"
        claseExtra="shadow-sm"
      />
    </div>
  );
};
