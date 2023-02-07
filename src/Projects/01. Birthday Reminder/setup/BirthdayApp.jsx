import React from "react";
import List from "./List";
import "./style.css";

const BirthdayApp = () => {
  return (
    <main>
      <section className="container">
        <h3>birthdays today</h3>
        <List />
        <button>clear all</button>
      </section>
    </main>
  );
};

export default BirthdayApp;
