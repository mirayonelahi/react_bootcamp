import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch(url);
    const response = await data.json();
    const slicedResult = response.slice(0, 9);
    setData(slicedResult);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};
export default useFetch;
