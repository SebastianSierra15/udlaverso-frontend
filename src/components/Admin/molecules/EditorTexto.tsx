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
import React from "react";

type Props = {
  label: string;
  maxLength?: number;
  value: string;
  onChange: (v: string) => void;
};

const EditorTexto: React.FC<Props> = ({
  label,
  maxLength = 2200,
  value,
  onChange,
}) => {
  const plainText = value.replace(/<[^>]+>/g, "");

  return (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-700">
        {label} (máximo {maxLength} caracteres)
      </label>

      <div className="border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-udlaverso-verde overflow-hidden">
        <EditorProvider>
          <Editor
            value={value}
            onChange={(e) => {
              if (plainText.length <= maxLength) onChange(e.target.value);
            }}
            className="min-h-[220px] max-h-[400px] overflow-y-auto text-sm leading-relaxed text-gray-800 bg-white rounded-b-lg"
          >
            <Toolbar className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-gray-200 bg-gray-50 p-2 rounded-t-lg">
              <BtnBold className="p-2 rounded-md hover:bg-udlaverso-verde/10 data-[active=true]:bg-udlaverso-verde/20 transition" />
              <BtnItalic className="p-2 rounded-md hover:bg-udlaverso-verde/10 data-[active=true]:bg-udlaverso-verde/20 transition" />
              <BtnUnderline className="p-2 rounded-md hover:bg-udlaverso-verde/10 data-[active=true]:bg-udlaverso-verde/20 transition" />
              <BtnLink className="p-2 rounded-md hover:bg-udlaverso-verde/10 transition" />
              <BtnNumberedList className="p-2 rounded-md hover:bg-udlaverso-verde/10 data-[active=true]:bg-udlaverso-verde/20 transition" />
              <BtnBulletList className="p-2 rounded-md hover:bg-udlaverso-verde/10 data-[active=true]:bg-udlaverso-verde/20 transition" />
            </Toolbar>
          </Editor>
        </EditorProvider>
      </div>

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
