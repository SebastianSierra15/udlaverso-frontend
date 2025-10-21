import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Props {
  etiqueta: string;
  tipo?: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  requerido?: boolean;
}

const InputTexto: React.FC<Props> = ({
  etiqueta,
  tipo = "text",
  valor,
  onChange,
  placeholder,
  requerido = false,
}) => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const esPassword = tipo === "password";

  return (
    <div className="flex flex-col w-full text-left relative">
      <label className="text-sm font-semibold text-udlaverso-gris mb-1">
        {etiqueta}
      </label>

      <div className="relative w-full">
        <input
          type={esPassword ? (mostrarPassword ? "text" : "password") : tipo}
          value={valor}
          onChange={(e) => {
            let nuevoValor = e.target.value;

            if (tipo === "email") {
              nuevoValor = nuevoValor.replace(/\s/g, "");
            }

            if (tipo === "password" && nuevoValor.length > 64) {
              nuevoValor = nuevoValor.slice(0, 64);
            }

            onChange({
              ...e,
              target: { ...e.target, value: nuevoValor },
            });
          }}
          required={requerido}
          placeholder={placeholder || etiqueta}
          maxLength={tipo === "password" ? 64 : undefined}
          className={`w-full px-4 ${
            esPassword ? "pr-10" : ""
          } py-2 border border-udlaverso-negro rounded-md focus:outline-none focus:ring-2 focus:ring-udlaverso-verde transition`}
        />

        {esPassword && (
          <button
            type="button"
            onClick={() => setMostrarPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-udlaverso-verde transition"
          >
            {mostrarPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputTexto;
