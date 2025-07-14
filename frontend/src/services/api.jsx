import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/blogdeaprendizaje/v1",
    timeout: 5000,
    headers: {"cache-Control": "no-cache, no-store, must-revalidate"}
});

export const getPublications = async () => {
    try {
        const response = await apiClient.get("/publications/");
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.msg || "Error al obtener publicaciones",
        };
    }
};


export const createComment = async (commentData) => {
    try {
      const response = await apiClient.post("/comments/", commentData);
      return response.data;
    } catch (error) {
      return {
        success: false,
        msg: error.response?.data?.msg || "Error al crear comentario",
      };
    }
  };

  export const getCourses = async () => {
    try {
        const response = await apiClient.get("/courses/");
        return {
            success: true,
            courses: response.data.courses
        };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.msg || "Error al obtener cursos"
        };
    }
};

  export const getCourseById = async (id) => {
    try {
        const response = await apiClient.get(`/courses/${id}`);
        return response.data;
    } catch (error) {
        return {
            error,
            success: false,
            msg: "Error al obtener el curso"
        };
    }
};

export const getPublicationById = async (id) => {
  try {
    const response = await apiClient.get(`/publications/${id}`);
    return {
      success: true,
      publication: response.data.publication
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.msg || "Error al obtener la publicación"
    };
  }
};

  export const getPublicationsByCourse = async (courseId) => {
    try {
        const response = await apiClient.get(`/publications/by-course/${courseId}`);
        return response.data.publications;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.msg || "Error al obtener publicaciones por curso",
        };
    }
};

export const getPublicationsByCourseName = async (courseName) => {
    try {
        const response = await apiClient.get(`/publications/by-course-name/${courseName}`);
        return {
            success: true,
            publications: response.data.publications
        };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.msg || "Error al obtener publicaciones por nombre de curso",
        };
    }
};

export const editComment = async (commentId, commentText) => {
  try {
      const response = await apiClient.put(`/comments/${commentId}`, { comment: commentText });
      return {
          success: true,
          comment: response.data.comment,
      };
  } catch (error) {
      return {
          success: false,
          msg: error.response?.data?.msg || "Error al editar comentario",
      };
  }
};

export const deleteComment = async (commentId) => {
  try {
      const response = await apiClient.delete(`/comments/${commentId}`);
      return {
          success: true,
          comment: response.data.comment,
      };
  } catch (error) {
      return {
          success: false,
          msg: error.response?.data?.msg || "Error al eliminar comentario",
      };
  }
};