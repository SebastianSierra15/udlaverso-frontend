import BotonCierreModal from "../atoms/BotonCierreModal";
import FormularioResenia from "./FormularioResenia";

interface Props {
  onClose: () => void;
  onSubmit: (usuario: string, comentario: string, estrellas: number) => void;
}

const ModalResenia: React.FC<Props> = ({ onClose, onSubmit }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl w-[90%] md:w-[500px] p-6 shadow-xl relative animate-fadeIn">
      <BotonCierreModal onClose={onClose} />

      <h3 className="text-xl font-semibold text-udlaverso-negro mb-2">
        Escribe tu reseña
      </h3>

      <p className="text-sm text-udlaverso-gris mb-4">
        Tu opinión será visible públicamente.
      </p>

      <FormularioResenia onSubmit={onSubmit} />
    </div>
  </div>
);

export default ModalResenia;
