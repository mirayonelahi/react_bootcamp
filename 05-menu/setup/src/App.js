import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [item, setItem] = useState(items);
  return (
    <main className="container">
      <h1>Our Menu</h1>
      <p className="underline"></p>

      <div>
        <Categories item={item} />
      </div>
    </main>
  );
}

export default App;
