import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return React.createElement("h1", null, "sad");
};

ReactDom.render(<App />, document.getElementById("root"));
