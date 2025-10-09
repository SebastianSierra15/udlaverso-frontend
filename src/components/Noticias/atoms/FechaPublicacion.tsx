interface Props {
  fecha: string;
}

const FechaPublicacion: React.FC<Props> = ({ fecha }) => (
  <p className="text-xs text-udlaverso-gris">{fecha}</p>
);

export default FechaPublicacion;
