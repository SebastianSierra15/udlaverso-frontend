import { Link } from "react-router-dom";
import FormularioRegistro from "../molecules/FormularioRegistro";
import type { RegistroForm } from "../../../types/RegistroForm.type";

interface Props {
  onSubmit: (form: RegistroForm) => void;
  loading?: boolean;
}

const TarjetaRegistro: React.FC<Props> = ({ onSubmit, loading = false }) => {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 rounded-3xl bg-black/70 px-4 py-6 shadow-2xl backdrop-blur-sm sm:px-6 md:flex-row md:gap-10 md:px-10 lg:px-14 lg:py-8">
      <div className="flex w-full flex-col items-center justify-center space-y-4 text-center md:w-[45%] lg:w-[40%]">
        <Link to="/" className="flex flex-col items-center">
          <img
            src="/logos/logo-white.png"
            alt="Logo UdlaVerso"
            title="Udlaverso"
            className="w-40 max-w-full md:w-48 lg:w-64 hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-xs md:max-w-sm leading-snug">
          “Explora el conocimiento a través de la Realidad Aumentada”
        </p>
      </div>

      <div className="hidden md:block w-px bg-white/20 h-80 mx-4" />

      <div className="flex w-full flex-col items-center rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-8 md:w-[55%] md:px-10 md:py-6 lg:w-[50%] lg:px-12 lg:py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-udlaverso-negro mb-4">
          Registrarse
        </h2>

        <FormularioRegistro onSubmit={onSubmit} loading={loading} />
      </div>
    </div>
  );
};

export default TarjetaRegistro;
