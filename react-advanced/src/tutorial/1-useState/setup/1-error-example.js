import React, { useState } from "react";

const ErrorExample = () => {
  const val = useState(1);
  console.log(val);
  const handleChange = () => {};
  return (
    <>
      <h2>Hello </h2>
      <button className="btn" onClick={handleChange}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
