import React from "react";
import { FormControl, Typography, TextField } from "@mui/material";

const Form = (props) => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    isbn,
    setIsbn,
    currentBookId,
    handleSubmit,
    cancelEdit,
  } = props;

  return (
    <FormControl onSubmit={handleSubmit}>
      <Typography variant="h5" align="left" gutterBottom>
        Title
      </Typography>
      <TextField
        autoFocus
        required
        label="Required"
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Typography variant="h5" align="left" gutterBottom>
        Author
      </Typography>
      <TextField
        label="Required"
        placeholder="Author"
        required
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Typography variant="h5" align="left" gutterBottom>
        ISBN#
      </Typography>
      <TextField
        required
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </FormControl>
  );
};

export default Form;
