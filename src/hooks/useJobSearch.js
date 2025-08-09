import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const jsearchApiKey = process.env.REACT_APP_JSEARCH_API_KEY;

const useJobSearch = (query, page, params) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stringifiedParams = useMemo(() => JSON.stringify(params), [params]);

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            setError(null);

            if (!jsearchApiKey) {
                setError("API Key is missing. Please check your .env file and RESTART the server.");
                setIsLoading(false);
                return;
            }
            
            const parsedParams = JSON.parse(stringifiedParams);

            const options = {
                method: 'GET',
                url: 'https://jsearch.p.rapidapi.com/search',
                headers: { 'X-RapidAPI-Key': jsearchApiKey, 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com' },
                params: { query, page: page.toString(), num_pages: '1', ...parsedParams }
            };

            try {
                const response = await axios.request(options);
                setData(response.data.data || []);
            } catch (err) {
                setError("Failed to fetch jobs. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, [query, page, stringifiedParams]); 

    return { data, isLoading, error };
};

export default useJobSearch;