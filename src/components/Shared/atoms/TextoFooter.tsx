interface Props {
  texto: string;
}

export const TextoFooter: React.FC<Props> = ({ texto }) => {
  return <p className="text-udlaverso-gris text-sm">{texto}</p>;
};
