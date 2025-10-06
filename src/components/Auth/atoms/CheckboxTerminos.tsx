interface Props {
  acepto: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxTerminos: React.FC<Props> = ({ acepto, onChange }) => {
  return (
    <label className="flex items-center gap-2 text-sm text-udlaverso-gris">
      <input
        type="checkbox"
        checked={acepto}
        onChange={onChange}
        className="accent-udlaverso-verde w-4 h-4"
        required
      />
      Acepto términos y condiciones
    </label>
  );
};

export default CheckboxTerminos;
