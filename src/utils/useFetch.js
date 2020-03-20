import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;
