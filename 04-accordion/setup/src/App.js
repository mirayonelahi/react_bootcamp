import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questionData, setQuestioData] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {questionData.map((data) => {
            return <SingleQuestion key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
