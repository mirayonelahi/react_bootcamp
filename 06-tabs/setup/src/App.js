import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const dataApi = await response.json();
      setData(dataApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  if (loading) {
    return (
      <section className="title">
        <h1>loading</h1>
      </section>
    );
  }

  return (
    <main>
      <section></section>
    </main>
  );
}

export default App;
