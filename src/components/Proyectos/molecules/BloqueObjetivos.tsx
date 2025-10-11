interface Props {
  objetivos: string;
}

const BloqueObjetivos: React.FC<Props> = ({ objetivos }) => (
  <div>
    <p className="text-udlaverso-negro font-semibold mb-1">
      Objetivo principal:
    </p>

    <p className="text-udlaverso-gris leading-relaxed">{objetivos}</p>
  </div>
);

export default BloqueObjetivos;
