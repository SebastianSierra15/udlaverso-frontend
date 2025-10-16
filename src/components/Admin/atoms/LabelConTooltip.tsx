import React from "react";
import TooltipInfo from "./Tooltip";

type Props = {
  texto: string;
  tooltip?: string;
  obligatorio?: boolean;
};

const LabelConTooltip: React.FC<Props> = ({ texto, tooltip, obligatorio }) => {
  return (
    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
      {texto}
      {obligatorio && <span className="text-red-500">*</span>}
      {tooltip && <TooltipInfo texto={tooltip} />}
    </label>
  );
};

export default LabelConTooltip;
