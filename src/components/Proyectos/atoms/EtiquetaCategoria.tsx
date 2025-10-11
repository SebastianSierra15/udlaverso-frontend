interface Props {
  categoria: string;
}

const EtiquetaCategoria: React.FC<Props> = ({ categoria }) => (
  <span className="inline-block bg-udlaverso-verde/10 text-udlaverso-verde font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
    {categoria}
  </span>
);

export default EtiquetaCategoria;
