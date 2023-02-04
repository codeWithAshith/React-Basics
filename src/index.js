import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <Fragment>
      <h3>CodewithAshith</h3>
      <p>This is our first component</p>
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
