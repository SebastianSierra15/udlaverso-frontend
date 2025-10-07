import { useState } from "react";
import InputFlotante from "../atoms/InputFlotante";
import CheckboxTerminos from "../atoms/CheckboxTerminos";
import Boton from "../../Shared/atoms/Boton";
import { Link } from "react-router-dom";

const FormularioRegistro: React.FC = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    universidad: "",
    contrasena: "",
    terminos: false,
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {/* Nombres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputFlotante
          id="nombre"
          etiqueta="Primer nombre*"
          valor={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          requerido
        />
        <InputFlotante
          id="apellido"
          etiqueta="Apellido*"
          valor={form.apellido}
          onChange={(e) => setForm({ ...form, apellido: e.target.value })}
          requerido
        />
      </div>

      {/* Correo */}
      <InputFlotante
        id="correo"
        etiqueta="Correo electrónico*"
        tipo="email"
        valor={form.correo}
        onChange={(e) => setForm({ ...form, correo: e.target.value })}
        requerido
      />

      {/* Universidad */}
      <InputFlotante
        id="universidad"
        etiqueta="Nombre de Universidad de procedencia*"
        valor={form.universidad}
        onChange={(e) => setForm({ ...form, universidad: e.target.value })}
        requerido
      />

      {/* Contraseña */}
      <InputFlotante
        id="contrasena"
        etiqueta="Contraseña*"
        tipo="password"
        valor={form.contrasena}
        onChange={(e) => setForm({ ...form, contrasena: e.target.value })}
        requerido
      />

      {/* Términos y condiciones */}
      <CheckboxTerminos
        acepto={form.terminos}
        onChange={(e) => setForm({ ...form, terminos: e.target.checked })}
      />

      {/* Botón principal */}
      <Boton texto="Crear cuenta" variante="principal" />

      {/* Enlace al login */}
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
  );
};

export default FormularioRegistro;
