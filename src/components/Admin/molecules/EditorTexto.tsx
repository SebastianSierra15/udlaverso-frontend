import { useState } from "react";
import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnLink,
  BtnNumberedList,
  BtnBulletList,
} from "react-simple-wysiwyg";

type Props = {
  label: string;
  maxLength?: number;
  value: string;
  onChange: (v: string) => void;
  obligatorio?: boolean;
};

const EditorTexto: React.FC<Props> = ({
  label,
  maxLength = 3000,
  value,
  onChange,
  obligatorio = false,
}) => {
  const plainText = value.replace(/<[^>]+>/g, "");
  const [error, setError] = useState("");

  const manejarCambio = (e: any) => {
    const textoHtml = e.target.value;
    const textoPlano = textoHtml.replace(/<[^>]+>/g, "");

    if (textoPlano.length <= maxLength) {
      onChange(textoHtml);
    }

    if (obligatorio && !textoPlano.trim()) {
      setError("Este campo es obligatorio.");
    } else {
      setError("");
    }
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-700">
        {label} (máximo {maxLength} caracteres)
        {obligatorio && <span className="text-red-500">*</span>}
      </label>

      <div
        className={`border border-gray-300 rounded-lg bg-white focus-within:ring-2 overflow-hidden ${
          error ? "border-red-500" : "focus-within:ring-udlaverso-verde"
        }`}
      >
        <EditorProvider>
          <Editor
            value={value}
            onChange={manejarCambio}
            className="min-h-[220px] max-h-[400px] overflow-y-auto text-sm leading-relaxed text-gray-800 bg-white rounded-b-lg"
          >
            <Toolbar className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-gray-200 bg-gray-50 p-2 rounded-t-lg">
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnLink />
              <BtnNumberedList />
              <BtnBulletList />
            </Toolbar>
          </Editor>
        </EditorProvider>
      </div>

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}

      <p
        className={`text-xs text-right ${
          plainText.length >= maxLength ? "text-red-600" : "text-gray-500"
        }`}
      >
        {plainText.length} / {maxLength} caracteres
      </p>
    </div>
  );
};

export default EditorTexto;
