interface Props {
  objetivos: string;
}

const BloqueObjetivos: React.FC<Props> = ({ objetivos }) => (
  <div>
    <p className="text-[15px] text-udlaverso-negro font-medium mb-1">
      Objetivo principal:
    </p>
    <p className="text-[15px] text-udlaverso-gris leading-relaxed">
      {objetivos}
    </p>
  </div>
);

export default BloqueObjetivos;
