import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useFetch;
