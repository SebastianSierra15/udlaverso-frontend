interface Props {
  descripcion: string;
}

export const BloqueDescripcion: React.FC<Props> = ({ descripcion }) => (
  <div className="text-udlaverso-gris leading-relaxed">
    <p>{descripcion}</p>
  </div>
);
