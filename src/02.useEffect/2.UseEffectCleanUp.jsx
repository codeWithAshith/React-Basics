import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSizeHandler = () => {
    setSize(window.innerWidth);
  };

  // useEffect(() => {
  //   console.log(
  //     "See in chrome, under event listeners in inspect elements",
  //     "to see multiple listeners which will trigger a memory leak"
  //   );
  //   window.addEventListener("resize", updateSizeHandler);
  // });
  useEffect(() => {
    window.addEventListener("resize", updateSizeHandler);
    return () => {
      console.log("Clean Up");
      window.removeEventListener("resize", updateSizeHandler);
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanUp;
