import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useProyecto } from "../../hooks/useProyecto";
import HeroProyectoIndividual from "../../components/Proyectos/organisms/HeroProyectoIndividual";
import DetalleProyecto from "../../components/Proyectos/organisms/DetalleProyecto";
import ProyectoDetalleSkeleton from "../../components/Proyectos/organisms/ProyectoDetalleSkeleton";

const ProyectoDetalle: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const navigate = useNavigate();
  const { proyecto, cargando, error } = useProyecto(
    decodeURIComponent(nombre || "")
  );

  useEffect(() => {
    if (!cargando && (error || !proyecto)) {
      navigate("/404");
    }
  }, [cargando, error, proyecto, navigate]);

  if (cargando) return <ProyectoDetalleSkeleton />;

  if (error || !proyecto) return null;

  const promedio =
    proyecto.reseniasProyecto && proyecto.reseniasProyecto.length > 0
      ? proyecto.reseniasProyecto.reduce(
          (sum, r) => sum + (r.valoracionResenia ?? 0),
          0
        ) / proyecto.reseniasProyecto.length
      : 0;

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

        <DetalleProyecto {...proyecto} promedio={promedio} linkProyecto="#" />
      </>
    </>
  );
};

export default ProyectoDetalle;
