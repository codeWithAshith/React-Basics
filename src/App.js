import React from "react";
import MultipleReturnFetch from "./03.conditionalRendering/2.MultipleReturnFetch";
import Shortcircuit from "./03.conditionalRendering/3.Shortcircuit";
import ShowHide from "./03.conditionalRendering/4.ShowHide";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <MultipleReturnFetch />
      <Shortcircuit />
      <ShowHide />
    </div>
  );
};

export default App;
