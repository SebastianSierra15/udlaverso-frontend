interface Props {
  texto: string;
}

export const DescripcionNoticia: React.FC<Props> = ({ texto }) => {
  return (
    <p className="text-sm text-udlaverso-gris leading-snug line-clamp-2">
      {texto}
    </p>
  );
};
