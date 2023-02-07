import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Call useCallback at the top level of your component
  // to cache a function definition between re-renders
  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setData(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { loading, data };
};
