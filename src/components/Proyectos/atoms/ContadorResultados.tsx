interface Props {
  total: number;
}

const ContadorResultados: React.FC<Props> = ({ total }) => (
  <p className="text-sm text-udlaverso-gris">
    {total} resultado{total === 1 ? "" : "s"}
  </p>
);

export default ContadorResultados;
