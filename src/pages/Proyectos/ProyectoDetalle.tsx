import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { registrarAnalitica } from "../../services";
import { useAuth, useProyecto } from "../../hooks";
import {
  HeroProyectoIndividual,
  DetalleProyecto,
  ProyectoDetalleSkeleton,
} from "../../components/Proyectos";

export const ProyectoDetalle: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const navigate = useNavigate();
  const { proyecto, cargando, error } = useProyecto(
    decodeURIComponent(nombre || ""),
  );
  const { user } = useAuth();

  useEffect(() => {
    if (proyecto?.idProyecto) {
      registrarAnalitica({
        idProyecto: Number(proyecto.idProyecto),
        idUsuario: user?.idUsuario ?? null,
        idTipoAnalitica: 1,
        descripcionAnalitica: "VisualizaciÃ³n de un proyecto",
      });
    }
  }, [proyecto?.idProyecto, user?.idUsuario]);

  useEffect(() => {
    if (!cargando && (error || !proyecto)) {
      navigate("/404");
    }
  }, [cargando, error, proyecto, navigate]);

  if (cargando) return <ProyectoDetalleSkeleton />;

  if (error || !proyecto) return null;

  return (
    <>
      <>
        <Helmet>
          <title>{proyecto.nombreProyecto} - UdlaVerso</title>
          <meta
            name="description"
            content={proyecto.descripcioncortaProyecto}
          />
        </Helmet>

        <HeroProyectoIndividual
          titulo={proyecto.nombreProyecto}
          descripcion={proyecto.objetivoProyecto}
          imagenFondo={proyecto.imagenesProyecto?.[0]}
        />

        <DetalleProyecto {...proyecto} />
      </>
    </>
  );
};
