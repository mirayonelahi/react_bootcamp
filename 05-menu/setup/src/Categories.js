import React from "react";

const Categories = ({ item }) => {
  const uniqueCategories = [...new Set(item.map((a) => a.category))];

  return (
    <>
      {uniqueCategories.map((x) => {
        return <h1>{x}</h1>;
      })}
    </>
  );
};

export default Categories;
