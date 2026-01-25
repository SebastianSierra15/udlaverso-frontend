import { Link } from "react-router-dom";
import type { RegistroForm } from "../../../types";
import { FormularioRegistro } from "../molecules";

interface Props {
  onSubmit: (form: RegistroForm) => void;
  loading?: boolean;
}

export const TarjetaRegistro: React.FC<Props> = ({
  onSubmit,
  loading = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black/70 backdrop-blur-sm rounded-3xl shadow-2xl w-[90%] max-w-6xl px-6 md:px-10 lg:px-14 py-6 md:py-4 lg:py-6 md:h-screen gap-10">
      <div className="flex flex-col items-center justify-center text-center w-full md:w-[45%] lg:w-[40%] space-y-4">
        <Link to="/" className="flex flex-col items-center">
          <img
            src="/logos/logo-white.png"
            alt="Logo UdlaVerso"
            title="Udlaverso"
            className="w-40 md:w-48 lg:w-64 hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-xs md:max-w-sm leading-snug">
          “Explora el conocimiento a través de la Realidad Aumentada”
        </p>
      </div>

      <div className="hidden md:block w-px bg-white/20 h-80 mx-4" />

      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 md:px-10 md:py-6 lg:px-12 lg:py-8 w-full md:w-[55%] lg:w-[50%] flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-udlaverso-negro mb-4">
          Registrarse
        </h2>

        <FormularioRegistro onSubmit={onSubmit} loading={loading} />
      </div>
    </div>
  );
};
