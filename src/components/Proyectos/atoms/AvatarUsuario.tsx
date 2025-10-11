interface Props {
  nombre: string;
}

const AvatarUsuario: React.FC<Props> = ({ nombre }) => (
  <div className="w-9 h-9 rounded-full bg-udlaverso-verde/20 flex items-center justify-center text-udlaverso-verde font-semibold">
    {nombre.charAt(0).toUpperCase()}
  </div>
);

export default AvatarUsuario;
