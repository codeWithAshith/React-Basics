import React, { useState } from "react";

import "./index.css";

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
