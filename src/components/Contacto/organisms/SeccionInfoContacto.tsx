import TarjetaInfoContacto from "../molecules/TarjetaInfoContacto";
import MapaUbicacion from "../molecules/MapaUbicacion";

const SeccionInfoContacto: React.FC = () => (
  <section className="py-16 px-6 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
      <div className="w-full md:w-1/2">
        <TarjetaInfoContacto />
      </div>

      <div className="w-full md:w-1/2">
        <MapaUbicacion />
      </div>
    </div>
  </section>
);

export default SeccionInfoContacto;
