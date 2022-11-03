import React from "react";
import TableField from "../tableField/TableField";

const Table = ({ books }) => {
  return (
    <div className="table">
      <div className="tableHeading">
        <TableField fieldName="Title" />
        <TableField fieldName="Author" />
        <TableField fieldName="ISBN#" />
        <TableField fieldName="Settings" />
      </div>
      {books.map((book) => (
        <div key={book.bookId} className="tableRow">
          <TableField />
          <TableField />
          <TableField />
          <TableField />
        </div>
      ))}
    </div>
  );
};

export default Table;
