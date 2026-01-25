interface Props {
  onClose: () => void;
}

export const BotonCierreModal: React.FC<Props> = ({ onClose }) => (
  <button
    onClick={onClose}
    className="absolute top-3 right-4 text-gray-400 hover:text-udlaverso-verde text-lg"
  >
    ✕
  </button>
);
