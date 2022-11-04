import React from "react";
import "./TableField.css";

const TableField = ({ fieldName, settingsField, removeBook, editBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i onClick={editBook} className="far fa-edit"></i>
          <i onClick={removeBook} className="far fa-trash-alt"></i>
        </>
      )}
    </div>
  );
};

export default TableField;
