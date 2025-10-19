import { useState } from "react";
import type { Resenia } from "../../../types/Resenia";
import TarjetaResenia from "../molecules/TarjetaResenia";
import ModalResenia from "../molecules/ModalResenia";
import Boton from "../../Shared/atoms/Boton";

interface Props {
  resenias: Resenia[];
  mostrarBoton?: boolean;
}

const ReseniasProyecto: React.FC<Props> = ({
  resenias: iniciales,
  mostrarBoton = true,
}) => {
  const [resenias, setResenias] = useState(iniciales);
  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarResenia = (
    usuario: string,
    comentario: string,
    estrellas: number
  ) => {
    const nueva: Resenia = {
      idResenia: Date.now(),
      valoracion: estrellas,
      comentario,
      fecha: new Date().toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      usuarioNombres: usuario,
      usuarioApellidos: "",
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

        {mostrarBoton && (
          <Boton
            texto="Escribe una reseña"
            onClick={() => setMostrarModal(true)}
            variante="alternativo"
            modo="light"
            claseExtra="mt-4 md:mt-0 shadow-sm"
          />
        )}
      </div>

      {/* Lista de reseñas */}
      {resenias.length ? (
        <div className="space-y-4">
          {resenias.map((r) => (
            <TarjetaResenia
              key={r.idResenia}
              usuario={`${r.usuarioNombres} ${r.usuarioApellidos ?? ""}`.trim()}
              comentario={r.comentario}
              estrellas={r.valoracion}
              fecha={new Date(r.fecha).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
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
