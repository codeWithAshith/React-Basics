import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element

const Greeting = () => {
  return (
    <Fragment>
      <h3>Hello World</h3>
      <ul>
        <li>
          <a href="" alt="">
            Hello World
          </a>
        </li>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </ul>
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
