import React from "react";

interface Props {
  texto: string;
}

const DescripcionNoticia: React.FC<Props> = ({ texto }) => {
  return (
    <p className="text-sm text-udlaverso-gris leading-snug line-clamp-2">
      {texto}
    </p>
  );
};

export default DescripcionNoticia;
