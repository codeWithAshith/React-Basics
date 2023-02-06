import React, { useEffect, useRef } from "react";

// preserves value
// Doesnot trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log("div-> ", divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    // dom manipulation
    refContainer.current.focus();
  }, []);

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="button">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
