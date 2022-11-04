import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/container/Container";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    // {
    //   bookTitle: "Book 1",
    //   bookAuthor: "John Doe",
    //   bookIsbn: "0000",
    //   bookId: uuidv4(),
    // },
  ]);

  const isInputInvalid = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() === "";
  };

  const clearInput = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn }
          : book
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInput();
    setCurrentBookId(null);

    if (isInputInvalid()) return;
    !currentBookId ? addBook() : updateBook();
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const cancelEdit = () => {
    clearInput();
    setCurrentBookId(null);
  };

  return (
    <div className="App">
      <h1>Dynamic Book List</h1>
      <Container>
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table books={books} removeBook={removeBook} editBook={editBook} />
      </Container>
    </div>
  );
};

export default App;
