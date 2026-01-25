interface Props {
  texto: string;
}

export const TituloSeccion: React.FC<Props> = ({ texto }) => {
  return (
    <h4 className="text-lg font-semibold text-udlaverso-negro mb-3">{texto}</h4>
  );
};
