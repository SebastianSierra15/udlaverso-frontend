interface Props {
  texto: string;
}

const EtiquetaTecnologia: React.FC<Props> = ({ texto }) => (
  <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-udlaverso-verde/10 text-udlaverso-verde font-semibold shadow-sm hover:bg-udlaverso-verde/20 transition">
    {texto}
  </span>
);

export default EtiquetaTecnologia;
