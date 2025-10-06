import React from "react";

interface Props {
  id: string;
  tipo?: string;
  etiqueta: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requerido?: boolean;
}

const InputFlotante: React.FC<Props> = ({
  id,
  tipo = "text",
  etiqueta,
  valor,
  onChange,
  requerido = false,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={tipo}
        value={valor}
        onChange={onChange}
        required={requerido}
        placeholder=" "
        className="peer w-full px-4 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-udlaverso-verde placeholder-transparent text-udlaverso-negro text-sm transition-all duration-300"
      />

      <label
        htmlFor={id}
        className={`absolute left-4 top-3 text-udlaverso-gris text-sm transition-all duration-300 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
        peer-focus:-top-3 peer-focus:text-xs bg-white rounded-md cursor-text peer-focus:cursor-pointer peer-focus:text-udlaverso-verde px-1 z-10`}
      >
        {etiqueta}
      </label>
    </div>
  );
};

export default InputFlotante;
