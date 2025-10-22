import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNoticiaPorTitulo } from "../../hooks/useNoticiaPorTitulo";
import HeroNoticias from "../../components/Noticias/organisms/HeroNoticias";
import DetalleNoticia from "../../components/Noticias/organisms/DetalleNoticia";
import DetalleNoticiaSkeleton from "../../components/Noticias/organisms/DetalleNoticiaSkeleton";

const NoticiaDetalle: React.FC = () => {
  const { titulo } = useParams<{ titulo: string }>();
  const navigate = useNavigate();
  const tituloDecodificado = decodeURIComponent(titulo || "");
  const { noticia, cargando } = useNoticiaPorTitulo(tituloDecodificado);

  useEffect(() => {
    if (!cargando && !noticia) {
      navigate("/404");
    }
  }, [cargando, noticia, navigate]);

  if (cargando)
    return (
      <>
        <HeroNoticias />
        <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
          <DetalleNoticiaSkeleton />
        </section>
      </>
    );

  if (!noticia) return null;

  return (
    <>
      <Helmet>
        <title>{noticia.tituloNoticia} - UdlaVerso</title>
        <meta
          name="description"
          content={noticia.contenidoNoticia.slice(0, 150)}
        />
      </Helmet>

      <HeroNoticias />

      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <DetalleNoticia
          titulo={noticia.tituloNoticia}
          fecha={noticia.fechapublicacionNoticia}
          imagen={noticia.imagenNoticia}
          contenido={noticia.contenidoNoticia}
        />
      </section>
    </>
  );
};

export default NoticiaDetalle;
