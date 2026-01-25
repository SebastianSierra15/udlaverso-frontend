interface SubtituloProps {
  texto: string;
  clase?: string;
}

export const Subtitulo: React.FC<SubtituloProps> = ({ texto, clase = "" }) => (
  <h2 className={`text-2xl font-semibold ${clase}`}>{texto}</h2>
);
