import Boton from "../../Shared/atoms/Boton";

interface Props {
  linkProyecto: string;
  linkGuia?: string;
}

const AccionesProyecto: React.FC<Props> = ({ linkProyecto, linkGuia }) => (
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
    <a href={linkProyecto} target="_blank" rel="noopener noreferrer">
      <Boton texto="Visitar proyecto" variante="principal" />
    </a>

    {linkGuia && (
      <a href={linkGuia} target="_blank" rel="noopener noreferrer">
        <Boton texto="Ver guía de uso" variante="secundario" />
      </a>
    )}
  </div>
);

export default AccionesProyecto;
