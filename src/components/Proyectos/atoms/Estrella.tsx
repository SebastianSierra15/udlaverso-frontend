import { FaStar } from "react-icons/fa";

interface Props {
  activa: boolean;
  onClick?: () => void;
  grande?: boolean;
}

const Estrella: React.FC<Props> = ({ activa, onClick, grande = false }) => (
  <FaStar
    onClick={onClick}
    className={`cursor-pointer transition ${
      activa ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"
    } ${grande ? "text-3xl" : "text-base"}`}
  />
);

export default Estrella;
