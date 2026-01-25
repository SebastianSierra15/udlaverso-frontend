import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProyectoData } from "../../../types";
import { useCrearProyecto, useCategorias } from "../../../hooks";
import {
  proyectoContenidoSchema,
  proyectoDatosBasicosSchema,
  proyectoImagenesCrearSchema,
} from "../../../schemas";
import { STORAGE_KEYS } from "../../../constants";
import { ROUTES } from "../../../routes";
import {
  Stepper,
  PasoDatosBasicos,
  PasoContenido,
  PasoImagenes,
  PasoRevision,
  BotonAdmin,
} from "../../../components/Admin";
import {
  AlertaEmergente,
  ConfirmacionGlobal,
} from "../../../components/Shared";

export const AdminNuevoProyecto = () => {
  const navigate = useNavigate();

  const { crearProyecto } = useCrearProyecto();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const {
    categorias,
    loading: cargandoCategorias,
    error: errorCategorias,
  } = useCategorias();

  const [paso, setPaso] = useState(1);
  const totalPasos = 4;
  const [alerta, setAlerta] = useState({
    visible: false,
    mensaje: "",
    tipo: "error" as "error" | "success" | "info" | "warning",
  });

  const mostrarAlerta = (
    mensaje: string,
    tipo: typeof alerta.tipo = "error",
  ) => {
    setAlerta({ visible: true, mensaje, tipo });
  };

  const cerrarAlerta = () => setAlerta({ ...alerta, visible: false });

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

  const [imagenes, setImagenes] = useState({
    hero: null as File | null,
    galeria: [] as File[],
    video: "",
  });

  const validarPaso = (): boolean => {
    if (paso === 1) {
      const validacion = proyectoDatosBasicosSchema.safeParse(datosBasicos);
      if (!validacion.success) {
        mostrarAlerta(
          validacion.error.issues[0]?.message ||
            "Completa todos los campos del paso Datos Basicos.",
        );
        return false;
      }
    }

    if (paso === 2) {
      const validacion = proyectoContenidoSchema.safeParse(contenido);
      if (!validacion.success) {
        mostrarAlerta(
          validacion.error.issues[0]?.message ||
            "Completa todos los campos del paso Contenido y Herramientas.",
        );
        return false;
      }
    }

    if (paso === 3) {
      const validacion = proyectoImagenesCrearSchema.safeParse(imagenes);
      if (!validacion.success) {
        mostrarAlerta(
          validacion.error.issues[0]?.message ||
            "Debes subir una imagen principal, al menos 3 imagenes y un video valido de YouTube.",
        );
        return false;
      }
    }

    return true;
  };

  const siguiente = () => {
    if (!validarPaso()) return;
    if (paso < totalPasos) setPaso(paso + 1);
  };

  const anterior = () => paso > 1 && setPaso(paso - 1);

  const handleGuardarProyecto = async () => {
    if (!validarPaso()) return;

    const token = localStorage.getItem(STORAGE_KEYS.token);
    if (!token) {
      mostrarAlerta("Debes iniciar sesión para crear un proyecto.", "error");
      return;
    }

    try {
      const data: ProyectoData & { hero: File; galeria: File[] } = {
        nombreProyecto: datosBasicos.titulo,
        autorProyecto: datosBasicos.autor,
        objetivoProyecto: datosBasicos.objetivo,
        descripcioncortaProyecto: datosBasicos.descripcionCorta,
        descripcionlargaProyecto: contenido.descripcionDetallada,
        videoProyecto: imagenes.video,
        categoriaId: Number(contenido.categorias[0]),
        herramientasProyecto: contenido.herramientas.join(", "),
        palabrasclaveProyecto: contenido.palabrasClave.join(", "),
        hero: imagenes.hero!,
        galeria: imagenes.galeria,
      };

      const nuevoProyecto = await crearProyecto(data);
      mostrarAlerta(
        `Proyecto creado con éxito (ID: ${nuevoProyecto.idProyecto})`,
        "success",
      );

      setTimeout(() => navigate(ROUTES.adminProyectos), 1000);
    } catch {
      mostrarAlerta(
        "Error al crear el proyecto o permisos insuficientes.",
        "error",
      );
    }
  };

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
        titulo="Confirmar creación de proyecto"
        mensaje="¿Deseas guardar este proyecto con la información actual? Esta acción no se puede deshacer."
        textoConfirmar="Sí, guardar"
        textoCancelar="Cancelar"
        onConfirmar={() => {
          setMostrarConfirmacion(false);
          handleGuardarProyecto();
        }}
        onCancelar={() => setMostrarConfirmacion(false)}
      />

      <h1 className="text-xl md:text-2xl font-bold text-udlaverso-negro">
        Agregar Proyecto
      </h1>

      <Stepper
        pasoActual={paso}
        total={totalPasos}
        onPasoChange={(nuevoPaso) => setPaso(nuevoPaso)}
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
      {paso === 3 && <PasoImagenes data={imagenes} onChange={setImagenes} />}
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
            texto="Guardar proyecto"
            onClick={() => setMostrarConfirmacion(true)}
            variante="principal"
          />
        )}
      </div>
    </section>
  );
};

