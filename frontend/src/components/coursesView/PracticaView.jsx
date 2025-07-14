import React, { useState } from "react";
import { usePublications } from "../../shared/hooks/usePublicationsView";
import { useComments } from "../../shared/hooks/useEditComment";
import { CommentForm } from "../comment/CommentForm";


export const ViewPractica = ({ courseName }) => {
  const { publications, loading, error, refetch } = usePublications({ courseName });
  const { editComment, deleteComment } = useComments({ onSuccess: refetch });

  const [openComments, setOpenComments] = useState({});
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const toggleComments = (pubId) => {
    setOpenComments((prevState) => ({
      ...prevState,
      [pubId]: !prevState[pubId],
    }));
  };

  const startEditing = (comment) => {
    setEditingCommentId(comment._id);
    setEditedText(comment.comment);
  };

  const cancelEditing = () => {
    setEditingCommentId(null);
    setEditedText("");
  };

  const handleUpdate = async (id) => {
    await editComment(id, editedText);
    cancelEditing();
  };

  const handleDelete = async (id) => {
    await deleteComment(id);
  };

  if (loading) {
    return <div className="loading-practicaView">Cargando publicaciones...</div>;
  }

  if (error) {
    return <div className="error-practicaView">Error: {error}</div>;
  }

  return (
    <div className="container-practicaView">
      <h1 className="text-practicaView text-blue-600">Practica Supervisada</h1>

      {publications.length === 0 ? (
        <p className="no-pubs-practicaView">Aun no se suben publicaciones</p>
      ) : (
        <div className="container-publications-practicaView">
          {publications.map((publication) => (
            <div key={publication._id} className="pub-card-practicaView">
              <h2 className="pub-title-practicaView">{publication.title}</h2>
              <p className="pub-desc-practicaView">{publication.descriptionoftheactivity}</p>
              <CommentForm publicationId={publication._id} />
              <div className="pub-dates-practicaView">
                <span>
                  Creado: {new Date(publication.creationDate).toLocaleDateString()}
                </span>
              </div>

              {publication.comments && publication.comments.length > 0 && (
                <div className="comments-section-practicaView">
                  <h3
                    className="comments-title-practicaView"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleComments(publication._id)}
                  >
                    Comentarios {openComments[publication._id] ? "▲" : "▼"}
                  </h3>

                  {openComments[publication._id] && (
                    <ul className="comments-list-practicaView">
                      {[...publication.comments]
                        .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
                        .map((comment) => (
                          <li key={comment._id} className="comment-item-practicaView">
                            <p className="comment-user-practicaView">{comment.nameUser}</p>

                            {editingCommentId === comment._id ? (
                              <>
                                <input
                                  type="text"
                                  value={editedText}
                                  onChange={(e) => setEditedText(e.target.value)}
                                />
                                <div>
                                  <button className="btnGuardarPractica" onClick={() => handleUpdate(comment._id)}>Guardar</button>
                                  <button className="btnCancelarPractica" onClick={cancelEditing}>Cancelar</button>
                                </div>
                              </>
                            ) : (
                              <>
                                <p className="comment-text-practicaView">{comment.comment}</p>
                                <p className="comment-date-practicaView">
                                  {new Date(comment.creationDate).toLocaleDateString()}
                                </p>
                                <div>
                                  <button className="btnEditarPractica" onClick={() => startEditing(comment)}>Editar</button>
                                  <button className="btnEliminarPractica" onClick={() => handleDelete(comment._id)}>Eliminar</button>
                                </div>
                              </>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
