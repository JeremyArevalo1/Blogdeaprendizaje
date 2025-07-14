// hooks/useCourseById.js
import { useEffect, useState } from "react";
import { getCourseById } from "../../services";// asegúrate que esté implementado

export const useCourseById = (id) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await getCourseById(id);
                if (res.success) {
                    setCourse(res.course);
                } else {
                    setError("No se pudo cargar el curso");
                }
            } catch (err) {
                setError("Error al conectar con el servidor");
                err
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    return { course, loading, error };
};
