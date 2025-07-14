// hooks/usePublications.js
import { useState, useEffect } from "react";
import { getPublications, getPublicationsByCourse, getPublicationsByCourseName } from "../../services";

export const usePublications = ({ courseId = null, courseName = null } = {}) => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPublications = async () => {
        setLoading(true);
        setError(null);

        try {
            let response;

            if (courseName) {
                response = await getPublicationsByCourseName(courseName);
            } else if (courseId) {
                response = await getPublicationsByCourse(courseId);
            } else {
                response = await getPublications();
            }

            if (response.success) {
                setPublications(response.publications);
            } else {
                setError(response.message || "Error al obtener publicaciones");
            }
        } catch (err) {
            setError("Error de conexión al servidor");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPublications();
    }, [courseId, courseName]);

    return {
        publications,
        loading,
        error,
        refetch: fetchPublications
    };
};
