import { FaStar } from "react-icons/fa";

interface Props {
  activa: boolean;
  onClick?: () => void;
  grande?: boolean;
  interactiva?: boolean;
}

const Estrella: React.FC<Props> = ({
  activa,
  onClick,
  grande = false,
  interactiva = true,
}) => (
  <FaStar
    onClick={interactiva ? onClick : undefined}
    className={`
      transition
      ${interactiva ? "cursor-pointer" : "cursor-default"}
      ${activa ? "text-yellow-400" : "text-gray-300"}
      ${interactiva && !activa ? "hover:text-yellow-300" : ""}
      ${grande ? "text-3xl" : "text-base"}
    `}
  />
);

export default Estrella;
