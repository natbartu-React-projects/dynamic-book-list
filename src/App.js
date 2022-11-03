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
    {
      bookTitle: "Book 1",
      bookAuthor: "John Doe",
      bookIsbn: "0000",
      bookId: uuidv4(),
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
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
        />
        <Table books={books} />
      </Container>
    </div>
  );
};

export default App;
