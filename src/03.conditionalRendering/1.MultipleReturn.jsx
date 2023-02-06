import React, { useState } from "react";

const MultipleReturn = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("Default User");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }

  return <div>{user}</div>;
};

export default MultipleReturn;
