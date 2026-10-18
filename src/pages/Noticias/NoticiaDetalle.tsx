import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { absoluteUrl } from "../../components/SEO/seo.utils";
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

  const noticiaPath = `/noticias/${encodeURIComponent(noticia.tituloNoticia)}`;
  const noticiaImage = noticia.imagenNoticia ?? "/images/hero.webp";

  return (
    <>
      <SEO
        title={`${noticia.tituloNoticia} | UdlaVerso`}
        description={noticia.contenidoNoticia.slice(0, 155)}
        path={noticiaPath}
        image={noticiaImage}
        type="article"
        author="Universidad de la Amazonia"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: noticia.tituloNoticia,
          description: noticia.contenidoNoticia.slice(0, 155),
          image: absoluteUrl(noticiaImage),
          datePublished: noticia.fechapublicacionNoticia ?? undefined,
          author: {
            "@type": "Organization",
            name: "Universidad de la Amazonia",
          },
          publisher: {
            "@type": "Organization",
            name: "Universidad de la Amazonia",
            logo: { "@type": "ImageObject", url: absoluteUrl("/logos/logo.png") },
          },
          mainEntityOfPage: absoluteUrl(noticiaPath),
        }}
      />

      <HeroNoticias />

      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <DetalleNoticia
          titulo={noticia.tituloNoticia}
          fecha={noticia.fechapublicacionNoticia ?? ""}
          imagen={noticiaImage}
          contenido={noticia.contenidoNoticia}
        />
      </section>
    </>
  );
};

export default NoticiaDetalle;
