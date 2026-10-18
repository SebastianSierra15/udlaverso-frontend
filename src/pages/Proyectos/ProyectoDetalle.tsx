import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { absoluteUrl } from "../../components/SEO/seo.utils";
import { useAuth } from "../../hooks/useAuth";
import { useProyecto } from "../../hooks/useProyecto";
import { registrarAnalitica } from "../../services/analiticas.service";
import HeroProyectoIndividual from "../../components/Proyectos/organisms/HeroProyectoIndividual";
import DetalleProyecto from "../../components/Proyectos/organisms/DetalleProyecto";
import ProyectoDetalleSkeleton from "../../components/Proyectos/organisms/ProyectoDetalleSkeleton";

const ProyectoDetalle: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const navigate = useNavigate();
  const { proyecto, cargando, error } = useProyecto(
    decodeURIComponent(nombre || "")
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

  const proyectoPath = `/proyectos/${encodeURIComponent(proyecto.nombreProyecto)}`;
  const proyectoImage = proyecto.imagenesProyecto?.[0] ?? "/images/hero.webp";

  return (
    <>
      <SEO
        title={`${proyecto.nombreProyecto} | Proyecto UdlaVerso`}
        description={proyecto.descripcioncortaProyecto}
        path={proyectoPath}
        image={proyectoImage}
        keywords={proyecto.palabrasclaveProyecto}
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: proyecto.nombreProyecto,
          description: proyecto.descripcioncortaProyecto,
          image: absoluteUrl(proyectoImage),
          url: absoluteUrl(proyectoPath),
          creator: {
            "@type": "Person",
            name: proyecto.autorProyecto,
          },
          keywords: proyecto.palabrasclaveProyecto,
          dateCreated: proyecto.fechacreacionProyecto ?? undefined,
        }}
      />

      <HeroProyectoIndividual
        titulo={proyecto.nombreProyecto}
        descripcion={proyecto.objetivoProyecto}
        imagenFondo={proyecto.imagenesProyecto?.[0]}
      />

      <DetalleProyecto {...proyecto} />
    </>
  );
};

export default ProyectoDetalle;
