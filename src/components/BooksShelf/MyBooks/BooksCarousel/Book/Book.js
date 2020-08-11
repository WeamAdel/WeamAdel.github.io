import React from "react";
import PropTypes from "prop-types";
import Preview from "./Preview/Preview";
import Info from "./Info/Info";

function Book(props) {
  let book = props.book;

  return (
    <div className="book">
      <Preview
        imgName={book.imgName}
        bookName={book.name}
        categoryId={book.category.id}
      />
      <Info book={book} />
    </div>
  );
}

Book.propTypes = {};

export default Book;
