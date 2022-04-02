import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const deleteId = (id) => {
    const newList = data.filter((x) => x.id != id);
    setData(newList);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const users = await response.json();
      setLoading(false);
      setData(users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (data.length === 0) {
    return (
      <main className="title">
        <div>
          <h2>No data</h2>
          <button
            onClick={() => {
              fetchData();
            }}
            className="btn"
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours data={data} deleteId={deleteId} />
    </main>
  );
}
export default App;
