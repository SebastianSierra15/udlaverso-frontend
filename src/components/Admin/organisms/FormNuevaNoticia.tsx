import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCrearNoticia } from "../../../hooks";
import { BotonAdmin } from "../atoms";
import { FormularioNoticia } from "../molecules";
import { ConfirmacionGlobal, AlertaEmergente } from "../../Shared";

export const FormNuevaNoticia: React.FC = () => {
  const navigate = useNavigate();
  const { crear } = useCrearNoticia();

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  const [cargando, setCargando] = useState(false);

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo.trim() || !contenido.trim() || !imagen) {
      setAlerta({
        visible: true,
        mensaje: "Completa todos los campos antes de guardar.",
        tipo: "warning",
      });
      return;
    }

    setMostrarConfirmacion(true);
  };

  const confirmarCreacion = async () => {
    setMostrarConfirmacion(false);
    setCargando(true);

    const noticia = {
      tituloNoticia: titulo,
      contenidoNoticia: contenido,
      estadoNoticia: 1,
    };

    try {
      await crear(noticia, imagen!);

      // ✅ Éxito
      setAlerta({
        visible: true,
        mensaje: "Noticia creada correctamente 🎉",
        tipo: "success",
      });

      setTimeout(() => navigate("/admin/noticias"), 1000);
    } catch {
      // ❌ Error
      setAlerta({
        visible: true,
        mensaje: "Ocurrió un error al crear la noticia.",
        tipo: "error",
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-udlaverso-negro">
        Crear nueva noticia
      </h2>

      <form onSubmit={manejarSubmit} className="space-y-6">
        <FormularioNoticia
          titulo={titulo}
          contenido={contenido}
          onTituloChange={setTitulo}
          onContenidoChange={setContenido}
          onImagenChange={setImagen}
        />

        <div className="flex justify-end gap-3">
          <BotonAdmin
            texto="Cancelar"
            variante="secundario"
            onClick={() => navigate("/admin/noticias")}
          />

          <BotonAdmin
            texto={cargando ? "Guardando..." : "Guardar Noticia"}
            tipo="submit"
            variante="principal"
          />
        </div>
      </form>

      {/* 🔸 Modal de confirmación */}
      <ConfirmacionGlobal
        visible={mostrarConfirmacion}
        titulo="Confirmar creación"
        mensaje="¿Deseas guardar esta noticia en el sistema?"
        textoConfirmar="Sí, guardar"
        textoCancelar="No, volver"
        onConfirmar={confirmarCreacion}
        onCancelar={() => setMostrarConfirmacion(false)}
      />

      {/* 🔸 Alerta emergente */}
      <AlertaEmergente
        visible={alerta.visible}
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        onClose={() => setAlerta({ ...alerta, visible: false })}
      />
    </section>
  );
};
