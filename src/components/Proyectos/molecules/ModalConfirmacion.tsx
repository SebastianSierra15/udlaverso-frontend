interface Props {
  titulo: string;
  mensaje: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}

const ModalConfirmacion: React.FC<Props> = ({
  titulo,
  mensaje,
  textoConfirmar = "Aceptar",
  textoCancelar = "Cancelar",
  onConfirmar,
  onCancelar,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="relative w-full max-w-[400px] rounded-2xl bg-white p-5 text-center shadow-xl animate-fadeIn sm:p-6">
      <h3 className="text-lg font-semibold text-udlaverso-negro mb-4">
        {titulo}
      </h3>
      <p className="text-sm text-udlaverso-gris mb-6">{mensaje}</p>

      <div className="flex flex-col-reverse justify-center gap-3 sm:flex-row sm:gap-4">
        <button
          onClick={onConfirmar}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          {textoConfirmar}
        </button>
        <button
          onClick={onCancelar}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          {textoCancelar}
        </button>
      </div>
    </div>
  </div>
);

export default ModalConfirmacion;
