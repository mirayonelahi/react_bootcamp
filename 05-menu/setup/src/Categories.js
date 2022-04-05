import React from "react";

const Categories = ({ categories, filterItem }) => {
  return (
    <>
      {categories.map((x, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              filterItem(x);
            }}
            className="filter-btn"
          >
            {x}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
