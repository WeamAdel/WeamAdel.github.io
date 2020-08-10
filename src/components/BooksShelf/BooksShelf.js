import React from "react";
import MyBooks from "./MyBooks/MyBooks";
import MyProcess from "./MyProcess/MyProcess";

function BooksShelf() {
  return (
    <div className="page books">
      <div className="page-wrapper">
        <main className="content">
          <MyBooks />
          <MyProcess />
        </main>
      </div>
    </div>
  );
}

export default BooksShelf;
