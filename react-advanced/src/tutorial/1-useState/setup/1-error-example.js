import React, { useState } from "react";

const ErrorExample = () => {
  const [title, settitle] = useState("world");
  const handleChange = () => {
    settitle("new world");
  };
  return (
    <>
      <h2>Hello {title} </h2>
      <button className="btn" onClick={handleChange}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
