import { useState } from "react";

const useAPI = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async (endpoint) => {
        setLoading(true);
        try {
            const response = await fetch(endpoint);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    return { data, loading, error, getData };
}

export default useAPI;