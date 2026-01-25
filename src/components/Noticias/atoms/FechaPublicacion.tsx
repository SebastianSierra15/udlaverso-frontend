interface Props {
  fecha: string;
}

export const FechaPublicacion: React.FC<Props> = ({ fecha }) => {
  if (!fecha) return null;

  const fechaObj = new Date(fecha);

  const fechaFormateada = fechaObj.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="text-sm text-udlaverso-gris font-medium">
      Publicado el {fechaFormateada}
    </p>
  );
};
