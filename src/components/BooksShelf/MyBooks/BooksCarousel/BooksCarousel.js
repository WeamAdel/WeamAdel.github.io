import React from "react";
import OwlCarousel from "react-owl-carousel2";
import Book from "./Book/Book";

const options = {
  items: 1,
  nav: false,
  dots: false,
  navText: [
    '<i class="fa fa-arrow-left" />',
    '<i class="fa fa-arrow-right" />',
  ],
};
function BooksCarousel(props) {
  let booksJSX = props.books.map((book, index) => (
    <Book key={index} book={book} />
  ));

  return (
    <div className="carousel-col col-md-6 d-md-last d-first">
      <section className="books-carousel">
        <div className="my-container">
          <OwlCarousel options={options}>{booksJSX}</OwlCarousel>
        </div>
      </section>
    </div>
  );
}

export default BooksCarousel;
