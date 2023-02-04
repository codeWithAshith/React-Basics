import React, { useState } from "react";

import "./index.css";

// General Rules of Hooks
// ----------------------
// use
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const App = () => {
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
  };

  return (
    <div className="container">
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default App;
