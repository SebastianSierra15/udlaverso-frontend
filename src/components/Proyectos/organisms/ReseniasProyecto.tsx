import { useState } from "react";
import TarjetaResenia from "../molecules/TarjetaResenia";
import ModalResenia from "../molecules/ModalResenia";
import Boton from "../../Shared/atoms/Boton";

interface Resenia {
  usuario: string;
  comentario: string;
  estrellas: number;
  fecha: string;
}

interface Props {
  resenias: Resenia[];
}

const ReseniasProyecto: React.FC<Props> = ({ resenias: iniciales }) => {
  const [resenias, setResenias] = useState(iniciales);
  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarResenia = (
    usuario: string,
    comentario: string,
    estrellas: number
  ) => {
    const nueva = {
      usuario,
      comentario,
      estrellas,
      fecha: new Date().toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    setResenias([nueva, ...resenias]);
    setMostrarModal(false);
  };

  return (
    <div className="mt-14 bg-white rounded-2xl p-8 shadow-md border border-gray-200">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-udlaverso-negro">
            Calificaciones y reseñas
          </h3>
          <p className="text-sm text-udlaverso-gris">
            Comparte tu experiencia con otros usuarios.
          </p>
        </div>

        <Boton
          texto="Escribe una reseña"
          onClick={() => setMostrarModal(true)}
          variante="alternativo"
          modo="light"
          claseExtra="mt-4 md:mt-0 shadow-sm"
        />
      </div>

      {/* Lista de reseñas */}
      {resenias.length ? (
        <div className="space-y-4">
          {resenias.map((r, i) => (
            <TarjetaResenia key={i} {...r} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 text-center py-4">
          Aún no hay reseñas. ¡Sé el primero en opinar!
        </p>
      )}

      {/* Modal */}
      {mostrarModal && (
        <ModalResenia
          onClose={() => setMostrarModal(false)}
          onSubmit={agregarResenia}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ReseniasProyecto;
