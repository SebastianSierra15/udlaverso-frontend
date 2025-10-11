interface Props {
  onClose: () => void;
}

const BotonCierreModal: React.FC<Props> = ({ onClose }) => (
  <button
    onClick={onClose}
    className="absolute top-3 right-4 text-gray-400 hover:text-udlaverso-verde text-lg"
  >
    ✕
  </button>
);

export default BotonCierreModal;
