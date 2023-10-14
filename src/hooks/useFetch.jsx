import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const { signal } = abortController;
        const res = await fetch(url, {
          ...options,
          signal,
        });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
  }

    fetchData();
    return () => {
      if (abortController.abort){
        abortController.abort();
      }
    }
  }, []);

  return { response, loading, error };
}