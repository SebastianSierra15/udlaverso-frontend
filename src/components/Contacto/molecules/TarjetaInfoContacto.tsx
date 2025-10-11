import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import IconoContacto from "../atoms/IconoContacto";
import EnlaceInstitucional from "./EnlaceInstitucional";

const TarjetaInfoContacto: React.FC = () => (
  <div className="flex flex-col gap-5 bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100 h-full">
    <h3 className="text-2xl font-extrabold text-udlaverso-negro">
      Universidad de la Amazonia
    </h3>

    <p className="text-sm text-udlaverso-gris -mt-2">NIT: 891190346-1</p>

    <IconoContacto
      icon={<FaMapMarkerAlt className="text-udlaverso-verde" />}
      texto="Sede Porvenir: Calle 17 Diagonal 17 con Carrera 3F, Barrio Porvenir, Florencia, Caquetá, Colombia"
      link="https://www.google.com/maps?q=Universidad+de+la+Amazonia+Florencia"
    />

    <IconoContacto
      icon={<FaPhone className="text-udlaverso-verde" />}
      texto="Tel: (+57) 608 4366160"
    />

    <IconoContacto
      icon={<FaEnvelope className="text-udlaverso-verde" />}
      texto="atencionalciudadano@uniamazonia.edu.co"
      link="mailto:atencionalciudadano@uniamazonia.edu.co"
    />

    <IconoContacto
      icon={<FaEnvelope className="text-udlaverso-verde" />}
      texto="quejasyreclamos@uniamazonia.edu.co"
      link="mailto:quejasyreclamos@uniamazonia.edu.co"
    />

    <IconoContacto
      icon={<FaEnvelope className="text-udlaverso-verde" />}
      texto="njudiciales@uniamazonia.edu.co"
      link="mailto:njudiciales@uniamazonia.edu.co"
    />

    <IconoContacto
      icon={<FaClock className="text-udlaverso-verde" />}
      texto="Atención al público: Lunes a Viernes de 7:30 a.m. a 11:30 a.m. y de 1:30 p.m. a 5:30 p.m."
    />

    <EnlaceInstitucional
      logoSrc="/logos/logo-udla.webp"
      nombre="Universidad de la Amazonia"
      url="https://www.uniamazonia.edu.co"
    />
  </div>
);

export default TarjetaInfoContacto;
