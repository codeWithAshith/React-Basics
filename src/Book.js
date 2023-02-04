import React from "react";

import "./index.css";

const Book = ({ title, author, img, price }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>Price $ {price}</p>
    </article>
  );
};

export default Book;
