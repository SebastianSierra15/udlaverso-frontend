interface Props {
  etiqueta: string;
  tipo?: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTexto: React.FC<Props> = ({
  etiqueta,
  tipo = "text",
  valor,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full text-left">
      <label className="text-sm font-semibold text-udlaverso-gris mb-1">
        {etiqueta}
      </label>

      <input
        type={tipo}
        value={valor}
        onChange={onChange}
        className="w-full px-4 py-2 border border-udlaverso-negro rounded-md focus:outline-none focus:ring-2 focus:ring-udlaverso-verde transition"
      />
    </div>
  );
};

export default InputTexto;
