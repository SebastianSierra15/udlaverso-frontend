interface Props {
  total: number;
}

export const ContadorResultados: React.FC<Props> = ({ total }) => (
  <p className="text-sm text-udlaverso-gris">
    {total} resultado{total === 1 ? "" : "s"}
  </p>
);
