import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  // useEffect cannot be an async function
  // useEffect(async () => {});

  // runs every render - browser will crash - result of infinite loop
  // useEffect(() => {
  //   getUsers();
  // });

  // runs only on initial render
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  return (
    <>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectSecondArgument;
