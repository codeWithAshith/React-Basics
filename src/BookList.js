import React from "react";

import Book from "./Book";
import { books } from "./utils/books";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

export default BookList;
