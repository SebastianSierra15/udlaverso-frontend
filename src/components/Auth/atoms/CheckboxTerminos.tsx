import { useState } from "react";
import { ModalTerminos } from "../../Shared";

interface Props {
  acepto: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxTerminos: React.FC<Props> = ({ acepto, onChange }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <label className="flex items-center gap-2 text-sm text-udlaverso-gris flex-wrap">
        <input
          type="checkbox"
          checked={acepto}
          onChange={onChange}
          className="accent-udlaverso-verde w-4 h-4"
          required
        />
        Acepto{" "}
        <button
          type="button"
          onClick={() => setMostrarModal(true)}
          className="text-udlaverso-verde hover:underline font-semibold"
        >
          términos y condiciones
        </button>
      </label>

      <ModalTerminos
        visible={mostrarModal}
        onClose={() => setMostrarModal(false)}
        onDecision={(accepted) => {
          const event = {
            target: { checked: accepted },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
          setMostrarModal(false);
        }}
      />
    </>
  );
};
