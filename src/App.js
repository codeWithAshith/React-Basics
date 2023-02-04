import React from "react";
import UseStateBasics from "./01.useState/1.UseStateBasics";
import UseStateArray from "./01.useState/2.UseStateArray";
import UseStateObject from "./01.useState/3.UseStateObject";
import UseStateCounter from "./01.useState/4.UseStateCounter";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
    </div>
  );
};

export default App;
