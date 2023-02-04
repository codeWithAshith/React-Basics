import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: 1,
    name: "john",
    age: 24,
    message: "Random Message",
  });
  const changeMessageHandler = () => {
    setPerson({ ...person, message: "Don't forget to add ...persons" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessageHandler}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateObject;
