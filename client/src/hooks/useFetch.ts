import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
import { ProductDataFields } from "../types/DataTypes";

const useFetch = <T extends ProductDataFields | ProductDataFields[]>(
  url: string
) => {
  const [data, setData] = useState<ProductDataFields | ProductDataFields[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data as T);
      } catch (err: any) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
