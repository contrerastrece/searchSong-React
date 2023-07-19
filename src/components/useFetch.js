import { useState, useEffect } from "react";

const useFetch = (url,options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Definimos las opciones constantes para la solicitud
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key":"ee70458364mshd0186ce8e1256d0p15041ajsn2678ff925da5",
  //     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
