interface Props {
  texto: string;
}

export const CategoriaChip: React.FC<Props> = ({ texto }) => (
  <span className="px-2 py-1 text-xs font-semibold text-udlaverso-verde bg-udlaverso-verde/10 rounded-full">
    {texto}
  </span>
);
