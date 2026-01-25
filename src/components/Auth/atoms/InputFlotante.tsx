import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Props {
  id: string;
  tipo?: string;
  etiqueta: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requerido?: boolean;
  institucional?: boolean;
  maxLength?: number;
  soloLetras?: boolean;
  deshabilitarArroba?: boolean;
  mostrarTogglePassword?: boolean;
}

export const InputFlotante: React.FC<Props> = ({
  id,
  tipo = "text",
  etiqueta,
  valor,
  onChange,
  requerido = false,
  institucional = false,
  maxLength,
  soloLetras,
  deshabilitarArroba,
  mostrarTogglePassword,
}) => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const esPassword = tipo === "password";

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={
          esPassword && mostrarTogglePassword
            ? mostrarPassword
              ? "text"
              : "password"
            : tipo
        }
        value={valor}
        onChange={(e) => {
          let nuevoValor = e.target.value;
          if (deshabilitarArroba) {
            nuevoValor = nuevoValor.replace(/@/g, "");
          }
          if (soloLetras) {
            nuevoValor = nuevoValor.replace(/[^a-zA-ZÁÉÍÓÚáéíóúñÑ\s]/g, "");
          }
          if (maxLength && nuevoValor.length > maxLength) {
            nuevoValor = nuevoValor.slice(0, maxLength);
          }
          onChange({
            ...e,
            target: { ...e.target, value: nuevoValor },
          });
        }}
        required={requerido}
        placeholder=" "
        maxLength={maxLength}
        className={`peer w-full px-4 ${
          mostrarTogglePassword ? "pr-10" : ""
        } py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-udlaverso-verde placeholder-transparent text-udlaverso-negro text-sm transition-all duration-300 cursor-text`}
      />

      {esPassword && mostrarTogglePassword && (
        <button
          type="button"
          onClick={() => setMostrarPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-udlaverso-verde transition"
        >
          {mostrarPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}

      {institucional && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 select-none pointer-events-none">
          @udla.edu.co
        </span>
      )}

      <label
        htmlFor={id}
        className={`absolute left-4 ${
          valor
            ? "-top-3 text-xs text-udlaverso-verde cursor-pointer"
            : "top-3 text-gray-500 text-base cursor-text"
        } transition-all duration-300 bg-white rounded-md px-1 z-10 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-udlaverso-verde`}
      >
        {etiqueta}
      </label>
    </div>
  );
};
