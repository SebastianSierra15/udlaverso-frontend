import React from "react";

interface Props {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const BotonRedSocial: React.FC<Props> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className="text-udlaverso-verde hover:text-udlaverso-verdeOscuro transform transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
  >
    {icon}
  </button>
);

export default BotonRedSocial;
