import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/codewithAshith";

const MultipleReturnFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }

  return <div>{user}</div>;
};

export default MultipleReturnFetch;
