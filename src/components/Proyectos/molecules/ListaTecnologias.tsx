import EtiquetaTecnologia from "../atoms/EtiquetaTecnologia";

interface Props {
  tecnologias: string[];
}

const ListaTecnologias: React.FC<Props> = ({ tecnologias }) => (
  <div>
    <p className="text-udlaverso-negro font-semibold mb-1">
      Tecnologías utilizadas:
    </p>
    <div className="flex flex-wrap gap-2">
      {tecnologias.map((tec, i) => (
        <EtiquetaTecnologia key={i} texto={tec} />
      ))}
    </div>
  </div>
);

export default ListaTecnologias;
