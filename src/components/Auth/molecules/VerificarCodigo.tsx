import { useState } from "react";
import { InputFlotante } from "../atoms";
import { Boton, AlertaEmergente } from "../../Shared";

interface Props {
  correo: string;
  onVerificar: (codigo: string) => void;
  onReenviar: () => void;
  loading?: boolean;
  mensaje?: string | null;
}

export const VerificarCodigo: React.FC<Props> = ({
  correo,
  onVerificar,
  onReenviar,
  loading = false,
  mensaje,
}) => {
  const [codigo, setCodigo] = useState("");
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const manejarVerificar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigo.trim()) {
      setAlerta({
        visible: true,
        mensaje: "Por favor ingresa el código recibido.",
        tipo: "warning",
      });
      return;
    }
    onVerificar(codigo);
  };

  return (
    <>
      <form
        onSubmit={manejarVerificar}
        className="flex flex-col gap-4 items-center justify-center w-full"
      >
        <p className="text-sm text-center text-udlaverso-gris mb-2">
          Hemos enviado un código de verificación al correo:{" "}
          <span className="font-semibold text-udlaverso-verde">{correo}</span>
        </p>

        <InputFlotante
          id="codigo"
          etiqueta="Código de verificación"
          valor={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          requerido
          maxLength={6}
        />

        <Boton
          texto={loading ? "Verificando..." : "Verificar código"}
          variante="principal"
          tipo="submit"
          deshabilitado={loading}
        />

        <button
          type="button"
          onClick={onReenviar}
          className="text-sm text-udlaverso-verde hover:text-udlaverso-verdeClaro mt-2 underline"
          disabled={loading}
        >
          Reenviar código
        </button>

        {mensaje && (
          <p className="text-xs text-center text-udlaverso-gris mt-1">
            {mensaje}
          </p>
        )}
      </form>

      <AlertaEmergente
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        visible={alerta.visible}
        onClose={() => setAlerta((prev) => ({ ...prev, visible: false }))}
      />
    </>
  );
};
