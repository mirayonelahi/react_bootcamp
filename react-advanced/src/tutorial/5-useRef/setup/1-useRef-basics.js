import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current.value);
    ref.current.focus();
  });
  return <input type="text" ref={ref} />;
};

export default UseRefBasics;
