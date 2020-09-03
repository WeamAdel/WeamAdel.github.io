import React from "react";
import MyBooks from "./MyBooks/MyBooks";
import MyProcess from "./MyProcess/MyProcess";
import Footer from "./../shared/Footer/Footer";

function BooksShelf() {
  return (
    <div className="page books">
      <div className="page-wrapper">
        <main className="content">
          <MyBooks />
          <MyProcess />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default BooksShelf;
