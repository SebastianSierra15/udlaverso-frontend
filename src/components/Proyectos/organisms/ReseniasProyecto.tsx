import { useState } from "react";
import { useAuth, useResenias } from "../../../hooks";
import type { Resenia } from "../../../types";
import { TarjetaResenia, ModalResenia, ModalConfirmacion } from "../molecules";
import { Boton } from "../../Shared";

interface Props {
  idProyecto: number | string;
}

export const ReseniasProyecto: React.FC<Props> = ({ idProyecto }) => {
  const { user } = useAuth();
  const puedeEscribir = user?.permisos?.some(
    (p) => p.nombrePermiso === "escribir_reseña",
  );

  const {
    resenias: reseñasActualizadas,
    miResenia,
    crear,
    editar,
    eliminar,
  } = useResenias(Number(idProyecto), user?.idUsuario);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalModo, setModalModo] = useState<
    "crear" | "editar" | "eliminar" | null
  >(null);
  const [reseniaSeleccionada, setReseniaSeleccionada] =
    useState<Resenia | null>(null);

  const reseñasOrdenadas = miResenia
    ? [
        miResenia,
        ...reseñasActualizadas.filter(
          (r) => r.idResenia !== miResenia.idResenia,
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
            onClick={() => {
              setModalModo("crear");
              setMostrarModal(true);
            }}
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
              onEditar={() => {
                setReseniaSeleccionada(r);
                setModalModo("editar");
                setMostrarModal(true);
              }}
              onEliminar={() => {
                setReseniaSeleccionada(r);
                setModalModo("eliminar");
                setMostrarModal(true);
              }}
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

      {/* Modal de Crear o Editar Reseña */}
      {mostrarModal && (modalModo === "crear" || modalModo === "editar") && (
        <ModalResenia
          onClose={() => {
            setMostrarModal(false);
            setModalModo(null);
            setReseniaSeleccionada(null);
          }}
          onSubmit={async (comentario, estrellas) => {
            if (modalModo === "crear") {
              await crear(comentario, estrellas);
            } else if (modalModo === "editar" && reseniaSeleccionada) {
              await editar(
                reseniaSeleccionada.idResenia,
                comentario,
                estrellas,
              );
            }
            setMostrarModal(false);
            setModalModo(null);
            setReseniaSeleccionada(null);
          }}
          valoresIniciales={
            modalModo === "editar" && reseniaSeleccionada
              ? {
                  comentario: reseniaSeleccionada.comentarioResenia,
                  estrellas: reseniaSeleccionada.valoracionResenia,
                }
              : undefined
          }
        />
      )}

      {/* Modal de Confirmación de Eliminación */}
      {mostrarModal && modalModo === "eliminar" && (
        <ModalConfirmacion
          titulo="¿Deseas eliminar tu reseña?"
          mensaje="Esta acción no se puede deshacer."
          textoConfirmar="Eliminar"
          textoCancelar="Cancelar"
          onConfirmar={async () => {
            if (reseniaSeleccionada)
              await eliminar(reseniaSeleccionada.idResenia);
            setMostrarModal(false);
            setModalModo(null);
            setReseniaSeleccionada(null);
          }}
          onCancelar={() => {
            setMostrarModal(false);
            setModalModo(null);
            setReseniaSeleccionada(null);
          }}
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
