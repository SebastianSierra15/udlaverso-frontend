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
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl w-[90%] md:w-[400px] p-6 shadow-xl relative animate-fadeIn text-center">
      <h3 className="text-lg font-semibold text-udlaverso-negro mb-4">
        {titulo}
      </h3>
      <p className="text-sm text-udlaverso-gris mb-6">{mensaje}</p>

      <div className="flex justify-center gap-4">
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
