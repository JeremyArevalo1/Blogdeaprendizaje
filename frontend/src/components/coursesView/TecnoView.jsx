import React, { useState } from "react";
import { usePublications } from "../../shared/hooks/usePublicationsView";
import { useComments } from "../../shared/hooks/useEditComment";
import { CommentForm } from "../comment/CommentForm";


export const ViewTecno = ({ courseName }) => {
    const { publications, loading, error, refetch } = usePublications({ courseName });
    const { editComment, deleteComment } = useComments({ onSuccess: refetch });

    const [openComments, setOpenComments] = useState({});
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedText, setEditedText] = useState("");

    const toggleComments = (pubId) => {
        setOpenComments((prev) => ({
            ...prev,
            [pubId]: !prev[pubId],
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
        return <div className="loading-tecnoView">Cargando publicaciones...</div>;
    }

    if (error) {
        return <div className="error-tecnoView">Error: {error}</div>;
    }

    return (
        <div className="container-tecnoView">
            <h1 className="text-tecnoView text-blue-600">Tecnología</h1>

            {publications.length === 0 ? (
                <p className="no-pubs-tecnoView">Aun no se suben publicaciones</p>
            ) : (
                <div className="container-publications-tecnoView">
                    {publications.map((publication) => (
                        <div key={publication._id} className="pub-card-tecnoView">
                            <h2 className="pub-title-tecnoView">{publication.title}</h2>
                            <p className="pub-desc-tecnoView">{publication.descriptionoftheactivity}</p>
                            <CommentForm publicationId={publication._id} />
                            <div className="pub-dates-tecnoView">
                                <span>
                                    Creado: {new Date(publication.creationDate).toLocaleDateString()}
                                </span>
                            </div>

                            {publication.comments && publication.comments.length > 0 && (
                                <div className="comments-section-tecnoView">
                                    <h3
                                        className="comments-title-tecnoView"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => toggleComments(publication._id)}
                                    >
                                        Comentarios {openComments[publication._id] ? "▲" : "▼"}
                                    </h3>

                                    {openComments[publication._id] && (
                                        <ul className="comments-list-tecnoView">
                                            {[...publication.comments]
                                                .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
                                                .map((comment) => (
                                                    <li key={comment._id} className="comment-item-tecnoView">
                                                        <p className="comment-user-tecnoView">{comment.nameUser}</p>

                                                        {editingCommentId === comment._id ? (
                                                            <>
                                                                <input
                                                                    type="text"
                                                                    value={editedText}
                                                                    onChange={(e) => setEditedText(e.target.value)}
                                                                />
                                                                <div>
                                                                    <button className="btnGuardarTecno" onClick={() => handleUpdate(comment._id)}>Guardar</button>
                                                                    <button className="btnCancelarTecno" onClick={cancelEditing}>Cancelar</button>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <p className="comment-text-tecnoView">{comment.comment}</p>
                                                                <p className="comment-date-tecnoView">
                                                                    {new Date(comment.creationDate).toLocaleDateString()}
                                                                </p>
                                                                <div>
                                                                    <button className="btnEditarTecno" onClick={() => startEditing(comment)}>Editar</button>
                                                                    <button className="btnEliminarTecno" onClick={() => handleDelete(comment._id)}>Eliminar</button>
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