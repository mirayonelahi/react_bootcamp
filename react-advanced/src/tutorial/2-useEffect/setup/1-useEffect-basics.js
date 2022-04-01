import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [size, serSize] = useState(window.innerWidth);
  const handle = () => {
    serSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("heyy");
    window.addEventListener("resize", handle);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", handle);
    };
  }, []);
  return (
    <>
      <h2>window {size}</h2>
    </>
  );
};

export default UseEffectBasics;
