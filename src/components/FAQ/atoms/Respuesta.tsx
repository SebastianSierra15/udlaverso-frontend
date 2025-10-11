interface RespuestaProps {
  texto: string;
}

const Respuesta: React.FC<RespuestaProps> = ({ texto }) => (
  <p className="text-sm md:text-base text-udlaverso-gris leading-relaxed">
    {texto}
  </p>
);

export default Respuesta;
