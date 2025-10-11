interface Props {
  texto: string;
  onClick?: () => void;
}

const BotonAccion: React.FC<Props> = ({ texto, onClick }) => (
  <button
    onClick={onClick}
    className="bg-udlaverso-verde hover:bg-udlaverso-verdeOscuro text-white font-semibold px-5 py-2 rounded-full shadow-sm transition"
  >
    {texto}
  </button>
);

export default BotonAccion;
