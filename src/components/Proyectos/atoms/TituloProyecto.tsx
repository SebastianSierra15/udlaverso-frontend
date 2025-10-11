interface Props {
  texto: string;
}

const TituloProyecto: React.FC<Props> = ({ texto }) => (
  <h1 className="text-3xl md:text-4xl font-extrabold text-udlaverso-negro mb-4">
    {texto}
  </h1>
);

export default TituloProyecto;
