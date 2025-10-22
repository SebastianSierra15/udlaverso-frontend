interface Props {
  titulo: string;
  descripcion: string;
  botonTexto: string;
  onClick: () => void;
}

const MensajeError: React.FC<Props> = ({
  titulo,
  descripcion,
  botonTexto,
  onClick,
}) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-udlaverso-negro mb-4">
        {titulo}
      </h1>

      <p className="text-gray-600 mb-8 max-w-lg mx-auto">{descripcion}</p>

      <button
        onClick={onClick}
        className="bg-udlaverso-verde text-white font-semibold px-6 py-3 rounded-full hover:bg-udlaverso-verdeClaro transition-all duration-300"
      >
        {botonTexto}
      </button>
    </div>
  );
};

export default MensajeError;
