import { FaRegEye } from "react-icons/fa6";

interface ContadorVisitasProps {
  visitas: number;
}

const ContadorVisitas: React.FC<ContadorVisitasProps> = ({ visitas }) => (
  <div className="flex items-center gap-1 text-gray-600 text-sm mt-2">
    <FaRegEye size={18} />

    <span>{visitas} visitas</span>
  </div>
);

export default ContadorVisitas;
