// hooks/useCourses.js
import { useState, useEffect } from "react";
import { getCourses } from "../../services";

export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCourses = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await getCourses();
            
            if (response.success) {
                setCourses(response.courses);
            } else {
                setError(response.message || "Error al obtener cursos");
            }
        } catch (err) {
            setError("Error de conexión al servidor");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return {
        courses,
        loading,
        error,
        refetch: fetchCourses
    };
};