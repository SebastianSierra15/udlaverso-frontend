import ItemFAQ from "../molecules/ItemFAQ";

const ListaFAQ: React.FC = () => {
  const faqs = [
    {
      pregunta: "¿Qué es el UdlaVerso?",
      respuesta:
        "Es el portal institucional de la Universidad de la Amazonia que integra proyectos académicos en realidad aumentada desarrollados por estudiantes y docentes.",
    },
    {
      pregunta: "¿Cómo puedo acceder a los proyectos?",
      respuesta:
        "Desde la sección de 'Proyectos' puedes explorar todas las iniciativas. Si eres usuario institucional, podrás acceder a recursos extendidos al iniciar sesión.",
    },
    {
      pregunta: "¿Necesito registrarme para usar el portal?",
      respuesta:
        "Puedes navegar libremente por el contenido público. Para participar activamente o dejar reseñas, necesitas registrarte o iniciar sesión.",
    },
    {
      pregunta: "¿Qué es el visor UA3D?",
      respuesta:
        "El visor UA3D es una aplicación de escritorio que te permite explorar los entornos 3D del UdlaVerso con mayor inmersión.",
    },
    {
      pregunta: "¿Dónde puedo descargar el visor?",
      respuesta:
        "Desde el portal, encontrarás un botón de descarga disponible en la página principal o en la sección de proyectos.",
    },
    {
      pregunta: "¿Quién puede publicar proyectos?",
      respuesta:
        "Solo los administradores y los autores institucionales con credenciales válidas pueden registrar y actualizar proyectos en el sistema.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-udlaverso-negro mb-10 text-center">
          Preguntas y respuestas más comunes
        </h2>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-10">
          {faqs.map((f, i) => (
            <ItemFAQ key={i} pregunta={f.pregunta} respuesta={f.respuesta} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListaFAQ;
