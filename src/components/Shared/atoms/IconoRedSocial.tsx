interface Props {
  icono: React.ReactNode;
  url: string;
}

export const IconoRedSocial: React.FC<Props> = ({ icono, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-udlaverso-verde hover:text-udlaverso-verdeOscuro hover:scale-105 duration-300 transition-transform"
    >
      {icono}
    </a>
  );
};
