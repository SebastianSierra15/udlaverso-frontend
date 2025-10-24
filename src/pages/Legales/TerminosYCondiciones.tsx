import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import HeroTerminos from "../../components/Legales/organisms/HeroTerminos";

const TerminosYCondiciones: React.FC = () => {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Términos y Condiciones - UdlaVerso</title>
      </Helmet>

      <HeroTerminos />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 text-udlaverso-gris leading-relaxed">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="mb-4">
            Al usar el portal <strong>UdlaVerso</strong>, confirmas que has
            leído y aceptas los <strong>Términos y Condiciones de uso</strong> y
            las <strong>Políticas de Tratamiento de Datos Personales</strong> de
            la <strong>Universidad de la Amazonia</strong>.
          </p>

          <p className="mb-6">
            Tus datos personales serán tratados conforme al{" "}
            <strong>
              Acuerdo No. 036 de 2018 – Manual de Tratamiento de Datos
              Personales
            </strong>{" "}
            y las disposiciones de la Ley 1581 de 2012 y el Decreto 1377 de
            2013. La Universidad garantiza la confidencialidad e integridad de
            la información que suministres.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-udlaverso-negro mt-10 mb-4">
            Documentos oficiales
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-udlaverso-verde font-medium">
            <li>
              <a
                href="https://www.uniamazonia.edu.co/documentos/docs/Departamento%20de%20Tecnologias%20de%20la%20Informacion/Guias%20para%20los%20usuarios/Terminos%20y%20condiciones%20del%20sitio%20web%202025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Términos y condiciones del sitio web 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.uniamazonia.edu.co/documentos/docs/Consejo%20Superior/Acuerdos/2018/Acuerdo%20036%20-%20Manual%20de%20Tratamiento%20de%20Datos%20Personales.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Acuerdo 036 de 2018 – Manual de Tratamiento de Datos Personales
              </a>
            </li>
            <li>
              <a
                href="https://www.uniamazonia.edu.co/documentos/docs/Consejo%20Superior/Acuerdos/2023/Acuerdo%20001%20-%20Por%20el%20cual%20se%20modifica%20de%20forma%20parcial%20el%20Estatuto%20de%20Propiedad%20Intelectual%20de%20la%20Universidad%20de%20la%20Amazonia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Acuerdo 001 de 2023 – Estatuto de Propiedad Intelectual
              </a>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-udlaverso-negro mt-10 mb-4">
            Contacto
          </h2>
          <p>
            Para ejercer tus derechos de <strong>Habeas Data</strong>, puedes
            escribir a{" "}
            <a
              href="mailto:atencionalciudadano@uniamazonia.edu.co"
              className="text-udlaverso-verde hover:underline"
            >
              atencionalciudadano@uniamazonia.edu.co
            </a>{" "}
            o visitar la{" "}
            <a
              href="https://www.uniamazonia.edu.co/inicio/index.php/politica-de-privacidad.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-udlaverso-verde hover:underline"
            >
              Política de Privacidad
            </a>
            .
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default TerminosYCondiciones;
