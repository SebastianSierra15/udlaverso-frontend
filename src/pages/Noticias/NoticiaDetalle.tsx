import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNoticiaPorTitulo } from "../../hooks/useNoticiaPorTitulo";
import HeroNoticias from "../../components/Noticias/organisms/HeroNoticias";
import DetalleNoticia from "../../components/Noticias/organisms/DetalleNoticia";

const NoticiaDetalle: React.FC = () => {
  const { titulo } = useParams<{ titulo: string }>();
  const { noticia, cargando } = useNoticiaPorTitulo(titulo || "");

  if (cargando)
    return (
      <section className="flex justify-center py-20 text-udlaverso-gris">
        Cargando noticia...
      </section>
    );

  if (!noticia)
    return (
      <section className="flex flex-col items-center justify-center py-20">
        <p className="text-udlaverso-gris text-lg mb-4">
          No se encontró la noticia solicitada.
        </p>
        <Link
          to="/noticias"
          className="px-6 py-3 border-2 border-udlaverso-verde text-udlaverso-verde font-semibold rounded-full hover:bg-udlaverso-verde hover:text-white transition-all"
        >
          Volver a Noticias
        </Link>
      </section>
    );

  if (!noticia) {
    return (
      <section className="flex flex-col items-center justify-center py-20">
        <p className="text-udlaverso-gris text-lg mb-4">
          No se encontró la noticia solicitada.
        </p>
        <Link
          to="/noticias"
          className="px-6 py-3 border-2 border-udlaverso-verde text-udlaverso-verde font-semibold rounded-full hover:bg-udlaverso-verde hover:text-white transition-all"
        >
          Volver a Noticias
        </Link>
      </section>
    );
  }

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
