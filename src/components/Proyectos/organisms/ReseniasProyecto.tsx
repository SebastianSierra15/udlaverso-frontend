import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useResenias } from "../../../hooks/useResenias";
import TarjetaResenia from "../molecules/TarjetaResenia";
import ModalResenia from "../molecules/ModalResenia";
import Boton from "../../Shared/atoms/Boton";

interface Props {
  idProyecto: number | string;
}

const ReseniasProyecto: React.FC<Props> = ({ idProyecto }) => {
  const { user } = useAuth();
  const puedeEscribir = user?.permisos?.some(
    (p) => p.nombrePermiso === "escribir_reseña"
  );

  const {
    resenias: reseñasActualizadas,
    miResenia,
    crear,
    editar,
    eliminar,
  } = useResenias(Number(idProyecto), user?.idUsuario);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoComentario] = useState("");
  const [nuevasEstrellas] = useState(0);

  const reseñasOrdenadas = miResenia
    ? [
        miResenia,
        ...reseñasActualizadas.filter(
          (r) => r.idResenia !== miResenia.idResenia
        ),
      ]
    : reseñasActualizadas;

  const agregarResenia = async (comentario: string, estrellas: number) => {
    if (comentario && estrellas > 0) {
      await crear(comentario, estrellas);
      setMostrarModal(false);
    }
  };

  return (
    <div className="mt-14 bg-white rounded-2xl p-8 shadow-md border border-gray-200">
      {/* Encabezado de las reseñas */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-udlaverso-negro">
            Calificaciones y reseñas
          </h3>
          <p className="text-sm text-udlaverso-gris">
            Comparte tu experiencia con otros usuarios.
          </p>
        </div>

        {puedeEscribir && !miResenia && (
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
      {reseñasOrdenadas.length ? (
        <div className="space-y-4">
          {reseñasOrdenadas.map((r) => (
            <TarjetaResenia
              key={r.idResenia}
              usuario={`${r.usuarioNombres} ${r.usuarioApellidos ?? ""}`.trim()}
              comentario={r.comentarioResenia}
              estrellas={r.valoracionResenia}
              fecha={new Date(r.fechaResenia).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              esPropia={r.idResenia === miResenia?.idResenia}
              onEditar={
                () => editar(r.idResenia, nuevoComentario, nuevasEstrellas) // Llamada para editar la reseña
              }
              onEliminar={() => eliminar(r.idResenia)}
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
