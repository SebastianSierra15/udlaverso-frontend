import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCategorias } from "../../../hooks/useCategorias";
import { useProyecto } from "../../../hooks/useProyecto";
import { useEditarProyecto } from "../../../hooks/useEditarProyecto";
import { validarNombreProyecto } from "../../../services/proyectos.service";
import type { ProyectoData } from "../../../types/Proyecto.type";
import { STORAGE_KEYS } from "../../../constants";
import { ROUTES } from "../../../routes";
import Stepper from "../../../components/Admin/molecules/Stepper";
import PasoDatosBasicos from "../../../components/Admin/organisms/PasoDatosBasicos";
import PasoContenido from "../../../components/Admin/organisms/PasoContenido";
import PasoImagenes from "../../../components/Admin/organisms/PasoImagenes";
import PasoRevision from "../../../components/Admin/organisms/PasoRevision";
import BotonAdmin from "../../../components/Admin/atoms/BotonAdmin";
import AlertaEmergente from "../../../components/Shared/atoms/AlertaEmergente";
import ConfirmacionGlobal from "../../../components/Shared/molecules/ConfirmacionGlobal";

const AdminEditarProyecto = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const navigate = useNavigate();
  const {
    proyecto,
    cargando: cargandoProyecto,
    error: errorProyecto,
  } = useProyecto(nombre);

  const {
    categorias,
    loading: cargandoCategorias,
    error: errorCategorias,
  } = useCategorias();
  const { editarProyecto } = useEditarProyecto();

  const [paso, setPaso] = useState(1);
  const totalPasos = 4;
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [alerta, setAlerta] = useState<{
    visible: boolean;
    mensaje: string;
    tipo: "error" | "success" | "info" | "warning";
  }>({
    visible: false,
    mensaje: "",
    tipo: "info",
  });

  const mostrarAlerta = (
    mensaje: string,
    tipo: "error" | "success" | "info" | "warning" = "info"
  ) => setAlerta({ visible: true, mensaje, tipo });

  const cerrarAlerta = () =>
    setAlerta((prev) => ({
      ...prev,
      visible: false,
    }));

  // Estados de formulario
  const [datosBasicos, setDatosBasicos] = useState({
    titulo: "",
    autor: "",
    objetivo: "",
    descripcionCorta: "",
  });
  const [contenido, setContenido] = useState({
    categorias: [] as string[],
    herramientas: [] as string[],
    palabrasClave: [] as string[],
    descripcionDetallada: "",
  });
  type ImagenesData = {
    hero: File | null;
    galeria: File[];
    video: string;
    heroUrl?: string;
    galeriaUrls?: string[];
    galeriaEliminadas?: string[];
    _inicializado?: boolean;
  };

  const [imagenes, setImagenes] = useState<ImagenesData>({
    hero: null,
    galeria: [],
    video: "",
    heroUrl: "",
    galeriaUrls: [],
  });

  // Precarga desde API
  useEffect(() => {
    if (!proyecto) return;

    setDatosBasicos({
      titulo: proyecto.nombreProyecto ?? "",
      autor: proyecto.autorProyecto ?? "",
      objetivo: proyecto.objetivoProyecto ?? "",
      descripcionCorta: proyecto.descripcioncortaProyecto ?? "",
    });

    setContenido({
      categorias: proyecto.categoriaNombre ? [proyecto.categoriaNombre] : [],
      herramientas: (proyecto.herramientasProyecto ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      palabrasClave: (proyecto.palabrasclaveProyecto ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      descripcionDetallada: proyecto.descripcionlargaProyecto ?? "",
    });

    setImagenes((prev) => {
      if (prev._inicializado) return prev; // evita recarga
      return {
        hero: null,
        galeria: [],
        video: proyecto.videoProyecto ?? "",
        heroUrl: proyecto.imagenesProyecto?.[0] ?? "",
        galeriaUrls: proyecto.imagenesProyecto?.slice(1) ?? [],
        galeriaEliminadas: [],
        _inicializado: true,
      };
    });
  }, [proyecto]);

  const validarPaso = async (): Promise<boolean> => {
    if (paso === 1) {
      if (
        !datosBasicos.titulo.trim() ||
        !datosBasicos.autor.trim() ||
        !datosBasicos.objetivo.trim() ||
        !datosBasicos.descripcionCorta.trim()
      ) {
        mostrarAlerta("Completa todos los campos del paso Datos Básicos.");
        return false;
      }
      // validación de nombre único (solo si cambió)
      if (
        datosBasicos.titulo.trim().toLowerCase() !==
        (proyecto?.nombreProyecto ?? "").trim().toLowerCase()
      ) {
        const { disponible } = await validarNombreProyecto(
          datosBasicos.titulo.trim(),
          Number(proyecto!.idProyecto)
        );

        if (!disponible) {
          mostrarAlerta("El nombre del proyecto ya existe. Usa otro.");
          return false;
        }
      }
    }
    if (paso === 2) {
      if (
        contenido.categorias.length < 1 ||
        contenido.herramientas.length < 1 ||
        contenido.descripcionDetallada.trim().length === 0
      ) {
        mostrarAlerta(
          "Completa todos los campos del paso Contenido y Herramientas."
        );
        return false;
      }
    }
    if (paso === 3) {
      const regexYoutube =
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
      if (!regexYoutube.test(imagenes.video)) {
        mostrarAlerta("Debes ingresar un video válido de YouTube.");
        return false;
      }
    }
    return true;
  };

  const siguiente = async () => {
    if (!(await validarPaso())) return;
    if (paso < totalPasos) setPaso(paso + 1);
  };

  const anterior = () => paso > 1 && setPaso(paso - 1);

  const handleActualizarProyecto = async () => {
    if (!(await validarPaso())) return;
    const token = localStorage.getItem(STORAGE_KEYS.token);
    if (!token) {
      mostrarAlerta("Debes iniciar sesión para editar un proyecto.");
      return;
    }
    try {
      const data: ProyectoData & { hero?: File; galeria?: File[] } = {
        nombreProyecto: datosBasicos.titulo,
        autorProyecto: datosBasicos.autor,
        objetivoProyecto: datosBasicos.objetivo,
        descripcioncortaProyecto: datosBasicos.descripcionCorta,
        descripcionlargaProyecto: contenido.descripcionDetallada,
        videoProyecto: imagenes.video,
        categoriaId:
          categorias.find((c) => c.nombreCategoria === contenido.categorias[0])
            ?.idCategoria || 0,
        herramientasProyecto: contenido.herramientas.join(", "),
        palabrasclaveProyecto: contenido.palabrasClave.join(", "),
        ...(imagenes.hero ? { hero: imagenes.hero } : {}),
        ...(imagenes.galeria.length ? { galeria: imagenes.galeria } : {}),
        ...(imagenes.galeriaEliminadas?.length
          ? { imagenesEliminadas: imagenes.galeriaEliminadas }
          : {}), // 👈 NUEVO
      };

      const actualizado = await editarProyecto(
        Number(proyecto!.idProyecto),
        data
      );

      mostrarAlerta(
        `Proyecto actualizado con éxito (ID: ${actualizado.idProyecto})`,
        "success"
      );
      navigate(ROUTES.adminProyectos);
    } catch {
      mostrarAlerta(
        "Error al actualizar el proyecto o permisos insuficientes.",
        "error"
      );
    }
  };

  if (cargandoProyecto)
    return <p className="text-gray-500 text-sm">Cargando proyecto...</p>;
  if (errorProyecto)
    return <p className="text-red-600 text-sm">{errorProyecto}</p>;
  if (!proyecto) return null;

  return (
    <section className="p-6 bg-white rounded-xl shadow-md space-y-6 relative">
      <AlertaEmergente
        mensaje={alerta.mensaje}
        tipo={alerta.tipo}
        visible={alerta.visible}
        onClose={cerrarAlerta}
      />

      <ConfirmacionGlobal
        visible={mostrarConfirmacion}
        titulo="Confirmar actualización de proyecto"
        mensaje="¿Deseas guardar los cambios de este proyecto?"
        textoConfirmar="Sí, actualizar"
        textoCancelar="Cancelar"
        onConfirmar={() => {
          setMostrarConfirmacion(false);
          handleActualizarProyecto();
        }}
        onCancelar={() => setMostrarConfirmacion(false)}
      />

      <h1 className="text-xl md:text-2xl font-bold text-udlaverso-negro">
        Editar Proyecto
      </h1>

      <Stepper
        pasoActual={paso}
        total={totalPasos}
        onPasoChange={(nuevo) => setPaso(nuevo)}
      />

      {paso === 1 && (
        <PasoDatosBasicos data={datosBasicos} onChange={setDatosBasicos} />
      )}
      {paso === 2 && (
        <PasoContenido
          data={contenido}
          onChange={setContenido}
          categorias={categorias}
          cargando={cargandoCategorias}
          error={errorCategorias}
        />
      )}
      {paso === 3 && (
        <PasoImagenes
          data={{
            hero: imagenes.hero,
            galeria: imagenes.galeria,
            video: imagenes.video,
            heroUrl: imagenes.heroUrl,
            galeriaUrls: imagenes.galeriaUrls,
          }}
          onChange={(nuevo) => {
            setImagenes((prev) => ({ ...prev, ...nuevo }));
          }}
        />
      )}
      {paso === 4 && (
        <PasoRevision
          datosBasicos={datosBasicos}
          contenido={contenido}
          imagenes={imagenes}
        />
      )}

      <div className="flex justify-between mt-6">
        {paso > 1 ? (
          <BotonAdmin texto="Volver" onClick={anterior} variante="secundario" />
        ) : (
          <div />
        )}
        {paso < totalPasos ? (
          <BotonAdmin texto="Siguiente" onClick={siguiente} />
        ) : (
          <BotonAdmin
            texto="Guardar cambios"
            onClick={() => setMostrarConfirmacion(true)}
            variante="principal"
          />
        )}
      </div>
    </section>
  );
};

export default AdminEditarProyecto;
