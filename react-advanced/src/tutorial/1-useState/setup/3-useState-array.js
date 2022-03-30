import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople((prev) => [...prev, { id: 8, name: "ayon" }]);
  };
  const handleDelete = (id) => {
    setPeople((prev) =>
      prev.filter((val) => {
        return val.id != id;
      })
    );
  };
  return (
    <>
      <h2>useState array example</h2>
      {people.map((p) => {
        return (
          <div className="item" key={p.id}>
            <h4> {p.name}</h4>
            <button onClick={() => handleDelete(p.id)}>Click</button>
          </div>
        );
      })}
      <button className="btn" onClick={handleClick}>
        Click outside
      </button>
    </>
  );
};

export default UseStateArray;
