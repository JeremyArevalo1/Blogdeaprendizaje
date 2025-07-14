import { useState } from "react";
import { createComment } from "../../services";

export const useCommentForm = (onSuccessCallback) => {
  const [formData, setFormData] = useState({
    nameUser: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (publicationId) => {
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const response = await createComment({
        ...formData,
        publication: publicationId,
      });

      if (response.success) {
        setSuccessMsg("Comentario agregado correctamente");
        setFormData({ nameUser: "", comment: "" });
        onSuccessCallback?.(); // solo si se pasa un callback
      } else {
        setError(response.msg || "Error al crear el comentario");
      }
    } catch (err) {
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    successMsg,
    handleChange,
    handleSubmit,
  };
};
