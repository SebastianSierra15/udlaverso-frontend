import BotonCierreModal from "../atoms/BotonCierreModal";
import FormularioResenia from "./FormularioResenia";

interface Props {
  onClose: () => void;
  onSubmit: (comentario: string, estrellas: number) => void;
  valoresIniciales?: {
    comentario: string;
    estrellas: number;
  };
}

const ModalResenia: React.FC<Props> = ({
  onClose,
  onSubmit,
  valoresIniciales,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-6">
    <div className="relative my-auto w-full max-w-[500px] rounded-2xl bg-white p-5 shadow-xl animate-fadeIn sm:p-6">
      <BotonCierreModal onClose={onClose} />

      <h3 className="text-xl font-semibold text-udlaverso-negro mb-2">
        {valoresIniciales ? "Editar reseña" : "Escribe tu reseña"}
      </h3>

      <p className="text-sm text-udlaverso-gris mb-4">
        {valoresIniciales
          ? "Actualiza tu opinión sobre este proyecto."
          : "Tu opinión será visible públicamente."}
      </p>

      <FormularioResenia
        onSubmit={onSubmit}
        valoresIniciales={valoresIniciales}
      />
    </div>
  </div>
);

export default ModalResenia;
