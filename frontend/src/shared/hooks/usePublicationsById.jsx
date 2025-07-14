import { useEffect, useState } from "react";
import { getPublicationById } from "../../services";

export const usePublicationById = (publicationId) => {
    const [publication, setPublication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPublication = async () => {
            setLoading(true);
            const result = await getPublicationById(publicationId);

            if (result.success) {
                setPublication(result.publication);
                setError("");
            } else {
                setError(result.message || "Error al obtener la publicación");
            }

            setLoading(false);
        };

        if (publicationId) {
            fetchPublication();
        }
    }, [publicationId]);

    return { publication, loading, error };
};
