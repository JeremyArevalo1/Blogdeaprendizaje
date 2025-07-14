import React from "react";
import { useCommentForm } from "../../shared/hooks/useCommentForm";

export const CommentForm = ({ publicationId, onCommentAdded }) => {
  const {
    formData,
    loading,
    error,
    successMsg,
    handleChange,
    handleSubmit,
  } = useCommentForm(onCommentAdded);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(publicationId);
    window.location.reload();
  };

  return (
    <form className="comment-form-tallerView" onSubmit={onSubmit}>
      <input
        type="text"
        name="nameUser"
        placeholder="Tu nombre"
        value={formData.nameUser}
        onChange={handleChange}
        maxLength={30}
      />
      <textarea
        name="comment"
        placeholder="Escribe tu comentario aquí..."
        value={formData.comment}
        onChange={handleChange}
        maxLength={150}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Publicar Comentario"}
      </button>
      {error && <p className="error-msg-tallerView">{error}</p>}
      {successMsg && <p className="success-msg-tallerView">{successMsg}</p>}
    </form>
  );
};