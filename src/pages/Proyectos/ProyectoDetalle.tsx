import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useProyecto } from "../../hooks/useProyecto";
import HeroProyectoIndividual from "../../components/Proyectos/organisms/HeroProyectoIndividual";
import DetalleProyecto from "../../components/Proyectos/organisms/DetalleProyecto";

const ProyectoDetalle: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const { proyecto, cargando, error } = useProyecto(
    decodeURIComponent(nombre || "")
  );

  if (cargando)
    return (
      <section className="flex flex-col items-center justify-center py-20">
        <p className="text-udlaverso-gris text-lg animate-pulse">
          Cargando proyecto...
        </p>
      </section>
    );

  if (error || !proyecto)
    return (
      <section className="flex flex-col items-center justify-center py-20">
        <p className="text-udlaverso-gris text-lg">{error}</p>
      </section>
    );

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
