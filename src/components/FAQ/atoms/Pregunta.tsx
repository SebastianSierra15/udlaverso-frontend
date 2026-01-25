interface PreguntaProps {
  texto: string;
}

export const Pregunta: React.FC<PreguntaProps> = ({ texto }) => (
  <h3 className="text-lg md:text-xl font-semibold text-udlaverso-verde leading-snug">
    {texto}
  </h3>
);
