import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const uniqueCategories = ["all", ...new Set(items.map((a) => a.category))];
function App() {
  const [item, setItem] = useState(items);
  const [categories, setCategpries] = useState(uniqueCategories);
  const filterItem = (id) => {
    if (id === "all") {
      setItem(items);
      return;
    }
    let newItem = items.filter((x) => x.category == id);
    setItem(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <p className="underline"></p>
        </div>

        <div className="btn-container">
          <Categories categories={categories} filterItem={filterItem} />
        </div>
        <div className="section-center">
          {item.map((i) => {
            return <Menu key={i.id} {...i} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
