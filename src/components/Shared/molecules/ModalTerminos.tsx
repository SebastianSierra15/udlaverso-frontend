import { motion } from "framer-motion";
import { IconoEscudo, IconoCerrar, BotonModal } from "../atoms";

interface Props {
  visible: boolean;
  onClose: () => void;
  onDecision: (accepted: boolean) => void;
}

export const ModalTerminos: React.FC<Props> = ({
  visible,
  onClose,
  onDecision,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg overflow-hidden"
      >
        {/* Encabezado */}
        <div className="bg-udlaverso-verde text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconoEscudo />
            <h2 className="text-lg md:text-xl font-bold">
              Términos y Condiciones
            </h2>
          </div>

          <button
            onClick={onClose}
            className="hover:bg-white/20 rounded-full p-1 transition"
          >
            <IconoCerrar />
          </button>
        </div>

        {/* Contenido scrollable */}
        <div className="overflow-y-auto max-h-[65vh] px-6 py-5 space-y-5 text-sm text-udlaverso-gris leading-relaxed">
          <p>
            Al registrarte en el portal <strong>UdlaVerso</strong> confirmas que
            has leído y aceptas los{" "}
            <strong>Términos y Condiciones de uso del sitio web</strong> y las{" "}
            <strong>Políticas de Tratamiento de Datos Personales</strong> de la{" "}
            <strong>Universidad de la Amazonia</strong>.
          </p>

          <p>
            Tus datos personales serán tratados conforme al{" "}
            <strong>
              Acuerdo No. 036 de 2018 – Manual de Tratamiento de Datos
              Personales
            </strong>{" "}
            y demás disposiciones de la Ley 1581 de 2012 y el Decreto 1377 de
            2013. La Universidad garantiza la confidencialidad, integridad y uso
            legítimo de la información que suministres en el registro.
          </p>

          <p>
            Asimismo, reconoces el cumplimiento del{" "}
            <strong>
              Acuerdo No. 001 de 2023 – Estatuto de Propiedad Intelectual
            </strong>
            , el cual regula los derechos sobre los contenidos, materiales y
            desarrollos creados o difundidos en el marco del portal UdlaVerso.
          </p>

          <p>Para conocer los documentos completos puedes consultarlos en:</p>

          <ul className="list-disc pl-6 space-y-2 text-udlaverso-verde font-medium">
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

          <p>
            Para ejercer tus derechos de <strong>Habeas Data</strong>, puedes
            contactar a la Universidad a través del correo{" "}
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
        </div>

        {/* Botones inferiores */}
        <div className="flex justify-end items-center gap-3 bg-gray-50 px-6 py-4">
          <BotonModal
            texto="Rechazar"
            variante="secundario"
            onClick={() => {
              onDecision(false);
              onClose();
            }}
          />

          <BotonModal
            texto="Aceptar"
            variante="principal"
            onClick={() => {
              onDecision(true);
              onClose();
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};
