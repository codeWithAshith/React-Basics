import React, { useEffect, useState } from "react";

// by default runs after every re-render

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    // cannot write useEffect inside the condition
    if (value >= 1) {
      document.title = `New Messge(${value})`;
    }
  });

  useEffect(() => {
    // run only the first time or initial render
    console.log("Runs only once");
  }, []);

  useEffect(() => {
    // whenever the value state is changed, only then useEffect will run
  }, [value]);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
