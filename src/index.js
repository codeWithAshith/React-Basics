import React from "react";
import ReactDOM from "react-dom/client";

//css
import "./index.css";

const author = "Morgan Housel";
const title = "The Psychology of Money Paperback";
const img =
  "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg";
const price = 10;

const BookList = () => {
  return (
    <section className="booklist">
      <Book title={title} author={author} img={img} price={price} />
    </section>
  );
};

const Book = (props) => {
  const { title, author, img, price } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author.toUpperCase()}
      </h4>
      <p>Price $ {price}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
