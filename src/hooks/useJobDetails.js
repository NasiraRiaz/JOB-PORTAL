import { useState, useEffect } from 'react';
import axios from 'axios';

const jsearchApiKey = process.env.REACT_APP_JSEARCH_API_KEY;

const useJobSearchDetails = (jobId) => {
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!jobId) return;

        const fetchJobDetails = async () => {
            setIsLoading(true);
            setError(null);

            if (!jsearchApiKey) {
                setError("API Key is missing.");
                setIsLoading(false);
                return;
            }

            const options = {
                method: 'GET',
                url: 'https://jsearch.p.rapidapi.com/job-details',
                params: { job_id: jobId },
                headers: { 'X-RapidAPI-Key': jsearchApiKey, 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com' }
            };

            try {
                const response = await axios.request(options);
                setJob(response.data.data[0]);
            } catch (err) {
                setError("Could not fetch job details.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    return { job, isLoading, error };
};

export default useJobSearchDetails;