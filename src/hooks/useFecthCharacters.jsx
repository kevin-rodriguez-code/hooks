import { useEffect, useState } from "react";

const useFetchCharacters = (url) => {
    const [character, setCharacter] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCharacter(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [url]);
    console.log(character)

    return { character, isLoading, error };
};

export default useFetchCharacters;
