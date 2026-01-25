interface ParrafoProps {
  texto: string;
  clase?: string;
}

export const Parrafo: React.FC<ParrafoProps> = ({ texto, clase = "" }) => (
  <p className={`text-base leading-relaxed ${clase}`}>{texto}</p>
);
