// hooks/useComments.js
import { editComment, deleteComment } from "../../services";
import { useState } from "react";

export const useComments = ({ onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEditComment = async (commentId, newText) => {
        setLoading(true);
        setError(null);

        try {
            const response = await editComment(commentId, newText);
            if (response.success) {
                onSuccess && onSuccess();
            } else {
                setError(response.msg || "Error al editar el comentario");
            }
        } catch (err) {
            setError("Error de conexión al servidor");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteComment = async (commentId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await deleteComment(commentId);
            if (response.success) {
                onSuccess && onSuccess();
            } else {
                setError(response.msg || "Error al eliminar el comentario");
            }
        } catch (err) {
            setError("Error de conexión al servidor");
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        editComment: handleEditComment,
        deleteComment: handleDeleteComment,
    };
};
