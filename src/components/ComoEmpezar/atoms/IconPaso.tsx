import { FaCheckCircle } from "react-icons/fa";

type Props = { className?: string };

const IconPaso: React.FC<Props> = ({ className = "" }) => (
  <span className={`inline-flex items-center ${className}`} aria-hidden>
    <FaCheckCircle className="w-5 h-5 text-udlaverso-verde" />
  </span>
);
export default IconPaso;
