import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/container/Container";
import Form from "./components/form/Form";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4(),
    },
  ]);

  return (
    <div className="App">
      <Container>
        <Form />
      </Container>
    </div>
  );
};

export default App;
