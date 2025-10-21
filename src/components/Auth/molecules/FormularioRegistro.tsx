import { useState } from "react";
import { Link } from "react-router-dom";
import InputFlotante from "../atoms/InputFlotante";
import CheckboxTerminos from "../atoms/CheckboxTerminos";
import Boton from "../../Shared/atoms/Boton";
import AlertaEmergente from "../../Shared/atoms/AlertaEmergente";

interface Props {
  onSubmit: (form: Record<string, any>) => void;
  loading?: boolean;
}

const FormularioRegistro: React.FC<Props> = ({ onSubmit, loading }) => {
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const mostrarAlerta = (
    mensaje: string,
    tipo: "error" | "success" | "info" | "warning" = "info"
  ) => {
    setAlerta({ visible: true, mensaje, tipo });
  };

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    universidad: "",
    contrasena: "",
    confirmarContrasena: "",
    terminos: false,
    esInstitucional: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.contrasena !== form.confirmarContrasena) {
      mostrarAlerta("Las contraseñas no coinciden.", "error");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^_])[A-Za-z\d@$!%*?&.#^_]{8,64}$/;

    if (!passwordRegex.test(form.contrasena)) {
      mostrarAlerta(
        "La contraseña debe tener entre 8 y 64 caracteres, con al menos una mayúscula, una minúscula, un número y un carácter especial.",
        "warning"
      );
      return;
    }

    if (
      !form.esInstitucional &&
      form.correo.toLowerCase().endsWith("@udla.edu.co")
    ) {
      mostrarAlerta(
        "Has ingresado un correo institucional, por favor marca la opción 'Pertenezco a la Universidad de la Amazonia' para continuar.",
        "warning"
      );
      return;
    }

    onSubmit(form);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-x-5 gap-y-4 w-full"
      >
        {/* Checkbox superior */}
        <div className="flex flex-col items-start gap-1">
          <label className="flex items-center gap-2 text-sm text-udlaverso-gris font-medium mt-1">
            <input
              type="checkbox"
              checked={form.esInstitucional}
              onChange={(e) => {
                const esInstitucional = e.target.checked;
                setForm({
                  ...form,
                  esInstitucional,
                  correo: esInstitucional ? form.correo.replace(/@.*/, "") : "",
                });
              }}
              className="accent-udlaverso-verde w-4 h-4"
            />
            Pertenezco a la Universidad de la Amazonia
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputFlotante
            id="nombre"
            etiqueta="Nombres"
            valor={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            requerido
            soloLetras
            maxLength={100}
          />

          <InputFlotante
            id="apellido"
            etiqueta="Apellidos"
            valor={form.apellido}
            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            requerido
            soloLetras
            maxLength={100}
          />
        </div>

        {/* Campos según selección */}
        {!form.esInstitucional ? (
          <>
            <InputFlotante
              id="correo"
              etiqueta="Correo electrónico*"
              tipo="email"
              valor={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
              requerido
            />

            <InputFlotante
              id="universidad"
              etiqueta="Nombre de Universidad de procedencia*"
              valor={form.universidad}
              onChange={(e) =>
                setForm({ ...form, universidad: e.target.value })
              }
              requerido
              maxLength={150}
            />
          </>
        ) : (
          <InputFlotante
            id="correoInstitucional"
            etiqueta="Correo institucional*"
            valor={form.correo}
            onChange={(e) => setForm({ ...form, correo: e.target.value })}
            requerido
            institucional
            deshabilitarArroba
          />
        )}

        <InputFlotante
          id="contrasena"
          etiqueta="Contraseña*"
          tipo="password"
          valor={form.contrasena}
          onChange={(e) => setForm({ ...form, contrasena: e.target.value })}
          requerido
          mostrarTogglePassword
          maxLength={64}
        />

        <InputFlotante
          id="confirmarContrasena"
          etiqueta="Confirmar contraseña*"
          tipo="password"
          valor={form.confirmarContrasena}
          onChange={(e) =>
            setForm({ ...form, confirmarContrasena: e.target.value })
          }
          requerido
          mostrarTogglePassword
          maxLength={64}
        />

        <CheckboxTerminos
          acepto={form.terminos}
          onChange={(e) => setForm({ ...form, terminos: e.target.checked })}
        />

        <Boton
          texto={loading ? "Creando cuenta..." : "Crear cuenta"}
          variante="principal"
          tipo="submit"
          deshabilitado={loading}
        />

        <p className="text-sm text-center text-udlaverso-gris mt-2">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-udlaverso-verde hover:text-udlaverso-verdeClaro font-semibold"
          >
            Inicia sesión
          </Link>
        </p>
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

export default FormularioRegistro;
