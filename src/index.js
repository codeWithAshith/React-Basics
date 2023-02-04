import React from "react";
import ReactDOM from "react-dom/client";

//css
import "./index.css";

const books = [
  {
    title: "The Psychology of Money Paperback",
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 10,
  },
  {
    title: "Ikigai",
    author: "Héctor García",
    img: "https://m.media-amazon.com/images/P/178633089X.01._SCLZZZZZZZ_SX500_.jpg",
    price: 10,
  },
  {
    title: "8 Rules of Love",
    author: "Jay Shetty",
    img: "https://m.media-amazon.com/images/I/712V6e98ZsL.jpg",
    price: 10,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => (
        <Book
          title={book.title}
          author={book.author}
          img={book.img}
          price={book.price}
        >
          Description about the book
        </Book>
      ))}
    </section>
  );
};

const Book = ({ title, author, img, price, children }) => {
  // const { title, author, img, price } = props;
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
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
