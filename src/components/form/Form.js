import React from "react";
import "./Form.css";

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
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            autoFocus
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Author</label>
          <input
            required
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label>ISBN#</label>
          <input
            required
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          {/* <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>} */}
        </form>
      </div>
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </>
  );
};

export default Form;
