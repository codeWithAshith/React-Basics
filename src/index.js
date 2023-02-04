import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <Fragment>
      <Person />
      <Message />
    </Fragment>
  );
};

const Person = () => <h2>Code with Ashith</h2>;
const Message = () => {
  return <p>This is nested component</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
