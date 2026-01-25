import { FaCircleInfo } from "react-icons/fa6";

type Props = {
  texto: string;
};

export const TooltipInfo: React.FC<Props> = ({ texto }) => (
  <span className="relative group inline-flex items-center ml-1 text-udlaverso-verde cursor-pointer">
    <FaCircleInfo size={14} />
    <span className="absolute left-5 top-1/2 -translate-y-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap z-10">
      {texto}
    </span>
  </span>
);
