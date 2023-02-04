import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <Fragment>
      <Book />
    </Fragment>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>The Psychology of Money Paperback</h1>;
};

const Author = () => {
  return <h1>Morgan Housel</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
