import React from "react";
import UseEffectBasics from "./02.useEffect/1.UseEffectBasics";
import UseEffectCleanUp from "./02.useEffect/2.UseEffectCleanUp";
import UseEffectSecondArgument from "./02.useEffect/3.UseEffectSecondArgument";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <UseEffectBasics />
      <UseEffectCleanUp />
      <UseEffectSecondArgument />
    </div>
  );
};

export default App;
