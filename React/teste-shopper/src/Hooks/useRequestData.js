import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestData(url) {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

    useEffect(() => {
        setLoading(true);

        axios.get(url)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        }).catch((error) => {
            setErro(error.response);
            setLoading(false);
        });
    }, []);


    return [data, loading, erro]
}

