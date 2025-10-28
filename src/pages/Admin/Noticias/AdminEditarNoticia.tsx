import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerNoticia } from "../../../controllers/noticiasController";
import { useActualizarNoticia } from "../../../hooks/useActualizarNoticia";
import FormularioNoticia from "../../../components/Admin/molecules/FormularioNoticia";
import BotonAdmin from "../../../components/Admin/atoms/BotonAdmin";
import ConfirmacionGlobal from "../../../components/Shared/molecules/ConfirmacionGlobal";
import AlertaEmergente from "../../../components/Shared/atoms/AlertaEmergente";

const AdminEditarNoticia: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { actualizar } = useActualizarNoticia();

  const [noticia, setNoticia] = useState<any>(null);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "info" as "error" | "success" | "info" | "warning",
  });

  // 🔹 Cargar noticia existente
  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerNoticia(Number(id));
      if (data) {
        setNoticia(data);
        setTitulo(data.tituloNoticia);
        setContenido(data.contenidoNoticia);
      }
    };
    cargar();
  }, [id]);

  // 🔹 Validación antes de confirmar
  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo.trim() || !contenido.trim()) {
      setAlerta({
        visible: true,
        mensaje: "Completa los campos requeridos.",
        tipo: "warning",
      });
      return;
    }

    setMostrarConfirmacion(true);
  };

  // 🔹 Confirmar edición
  const confirmarEdicion = async () => {
    setMostrarConfirmacion(false);
    try {
      await actualizar(
        Number(id),
        {
          tituloNoticia: titulo,
          contenidoNoticia: contenido,
        },
        imagen || undefined
      );

      setAlerta({
        visible: true,
        mensaje: "Noticia actualizada correctamente ✅",
        tipo: "success",
      });

      setTimeout(() => navigate("/admin/noticias"), 1000);
    } catch (error) {
      setAlerta({
        visible: true,
        mensaje: "Error al actualizar la noticia.",
        tipo: "error",
      });
    }
  };

  return (
    <section className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-udlaverso-negro">Editar noticia</h2>

      <form onSubmit={manejarSubmit} className="space-y-6">
        <FormularioNoticia
          titulo={titulo}
          contenido={contenido}
          onTituloChange={setTitulo}
          onContenidoChange={setContenido}
          onImagenChange={(e) => setImagen(e.target.files?.[0] || null)}
          imagenActual={noticia?.imagenNoticia || null}
        />

        <div className="flex justify-end gap-3">
          <BotonAdmin
            texto="Cancelar"
            variante="secundario"
            onClick={() => navigate("/admin/noticias")}
          />
          <BotonAdmin
            texto="Guardar cambios"
            tipo="submit"
            variante="principal"
          />
        </div>
      </form>

      {/* 🔸 Modal de confirmación */}
      <ConfirmacionGlobal
        visible={mostrarConfirmacion}
        titulo="Confirmar actualización"
        mensaje="¿Deseas guardar los cambios en esta noticia?"
        textoConfirmar="Sí, actualizar"
        textoCancelar="No, volver"
        onConfirmar={confirmarEdicion}
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

export default AdminEditarNoticia;
