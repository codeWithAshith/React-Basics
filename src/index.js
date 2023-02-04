import React from "react";
import ReactDOM from "react-dom/client";

//css
import "./index.css";

const books = [
  {
    id: 1,
    title: "The Psychology of Money Paperback",
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 10,
  },
  {
    id: 2,
    title: "Ikigai",
    author: "Héctor García",
    img: "https://m.media-amazon.com/images/P/178633089X.01._SCLZZZZZZZ_SX500_.jpg",
    price: 10,
  },
  {
    id: 3,
    title: "8 Rules of Love",
    author: "Jay Shetty",
    img: "https://m.media-amazon.com/images/I/712V6e98ZsL.jpg",
    price: 10,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

const Book = ({ title, author, img, price }) => {
  // https://reactjs.org/docs/events.html
  // onClick, onMouseOver

  const clickHandler = () => {
    alert("Hello world");
  };

  const complexHandler = (title) => {
    console.log(title);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log("on Mouse Over");
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>Price $ {price}</p>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexHandler(title)}>
        Should be inside a function
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
