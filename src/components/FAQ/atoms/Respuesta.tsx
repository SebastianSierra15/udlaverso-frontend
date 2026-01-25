interface RespuestaProps {
  texto: string;
}

export const Respuesta: React.FC<RespuestaProps> = ({ texto }) => (
  <p className="text-sm md:text-base text-udlaverso-gris leading-relaxed">
    {texto}
  </p>
);
