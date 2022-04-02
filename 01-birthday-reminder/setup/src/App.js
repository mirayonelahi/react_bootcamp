import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [user, setUser] = useState(data);
  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    e.target.innerHTML === `Clear All` ? setUser([]) : setUser(data);
  };
  return (
    <main>
      <div className="container">
        <div>
          <h3>{user.length} Birthday remaining</h3>
          <List user={user} />
          <button onClick={handleClick}>
            {user.length > 0 ? `Clear All` : `Time Travel`}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
