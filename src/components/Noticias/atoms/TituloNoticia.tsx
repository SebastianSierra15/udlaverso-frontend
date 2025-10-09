interface Props {
  titulo: string;
}

const TituloNoticia: React.FC<Props> = ({ titulo }) => (
  <h3 className="text-xl font-semibold text-udlaverso-negro hover:text-udlaverso-verde transition">
    {titulo}
  </h3>
);

export default TituloNoticia;
