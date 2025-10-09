import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroNoticias from "../../components/Noticias/organisms/HeroNoticias";
import DetalleNoticia from "../../components/Noticias/organisms/DetalleNoticia";

const noticias = [
  {
    id: "1",
    titulo: "Avances en el Visor UA3D",
    fecha: "2025-10-05",
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    contenido: `El visor UA3D incorpora nuevas funciones que mejoran la interacción con los entornos virtuales del UdlaVerso.
    
    Con esta nueva actualización, los usuarios pueden disfrutar de espacios colaborativos, navegación fluida y una experiencia inmersiva mejorada.
        
    La herramienta sigue siendo una pieza clave dentro del ecosistema digital del UdlaVerso, facilitando el acceso a proyectos de realidad aumentada para estudiantes y docentes.`,
  },
  {
    id: "2",
    titulo: "Nuevas Islas de Aprendizaje",
    fecha: "2025-09-20",
    imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    contenido: `Docentes y estudiantes desarrollan nuevas experiencias de realidad aumentada enfocadas en la educación ambiental.
    
Estas islas buscan conectar el aprendizaje académico con la conciencia ecológica, explorando la biodiversidad amazónica en entornos virtuales 3D.`,
  },
];

const NoticiaDetalle: React.FC = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === id);

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
        <title>{noticia.titulo} - UdlaVerso</title>
        <meta name="description" content={noticia.contenido.slice(0, 150)} />
      </Helmet>

      <HeroNoticias />

      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <DetalleNoticia
          titulo={noticia.titulo}
          fecha={noticia.fecha}
          imagen={noticia.imagen}
          contenido={noticia.contenido}
        />
      </section>
    </>
  );
};

export default NoticiaDetalle;
