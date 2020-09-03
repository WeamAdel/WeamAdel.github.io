import React, { useState } from "react";
import LeftColumn from "./LeftColumn/LeftColumn";
import BooksCarousel from "./BooksCarousel/BooksCarousel";

const BOOK_CATEGORIES = {
  front: { id: "front", name: "Front-End", count: 0, color: "#2ABAA0" },
  // back: { id: "back", name: "Back-End", count: 0, color: "salmon" },
  design: { id: "design", name: "Design", count: 0, color: "#E9358B" },
  other: { id: "other", name: "Other", count: 0, color: "#DBEB28" },
};

const BOOKS = [
  {
    name: "JavaScript Enlightenment",
    author: "Cody Lindley",
    numOfPages: 141,
    readingDate: 2018,
    category: BOOK_CATEGORIES.front,
    imgName: "js-enlightenment",
  },
  {
    name: "Fundamentals of computer programming with C#",
    author: "Svetlin Nakov & Co.",
    numOfPages: 1121,
    readingDate: 2019,
    category: BOOK_CATEGORIES.other,
    imgName: "fundamentals-of-programming",
  },
  {
    name: "CSS Mastery",
    author: "Andy Budd",
    numOfPages: 409,
    readingDate: 2019,
    category: BOOK_CATEGORIES.front,
    imgName: "css-mastery",
  },
  {
    name: "Visual Design Solutions",
    author: "Connie Malamed",
    numOfPages: 372,
    readingDate: 2019,
    category: BOOK_CATEGORIES.design,
    imgName: "vds",
  },
  {
    name: "Code Simplicity",
    author: "Max Kanat-Alexander",
    numOfPages: 78,
    readingDate: 2019,
    category: BOOK_CATEGORIES.other,
    imgName: "code-simplicity",
  },
  {
    name: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    numOfPages: 252,
    readingDate: 2019,
    category: BOOK_CATEGORIES.design,
    imgName: "refactoring-ui",
  },
  {
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    numOfPages: 436,
    readingDate: 2020,
    category: BOOK_CATEGORIES.front,
    imgName: "eloquent-js",
  },
  {
    name: "PHP a Beginner’s Guide",
    author: "Vikram Vaswani",
    numOfPages: 453,
    readingDate: 2019,
    category: BOOK_CATEGORIES.back,
    imgName: "php-guide",
    disabled: true,
  },
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    numOfPages: 431,
    readingDate: 2020,
    category: BOOK_CATEGORIES.other,
    imgName: "clean-code",
  },
  {
    name: "Design Thinking Handbook",
    author: "Eli Woolery",
    numOfPages: 110,
    readingDate: 2020,
    category: BOOK_CATEGORIES.design,
    imgName: "design-thinking-handbook",
  },
  {
    name: "JavaScript Design Patterns",
    author: "Addy Osmani",
    numOfPages: 187,
    readingDate: 2020,
    category: BOOK_CATEGORIES.front,
    imgName: "js-patterns",
  },
  {
    name: "Principles of Product Design",
    author: "Aaron Walter",
    numOfPages: 182,
    readingDate: 2020,
    category: BOOK_CATEGORIES.design,
    imgName: "principles-of-product-design",
  },
  {
    name: "The Clean Coder",
    author: "Robert C. Martin",
    numOfPages: 210,
    readingDate: 2020,
    category: BOOK_CATEGORIES.other,
    imgName: "clean-coder",
  },
];

(function setCategoryBooksCount() {
  for (let book of BOOKS) {
    if (book.disabled) continue;
    let cat = BOOK_CATEGORIES[book.category.id];
    cat.count = cat.count + 1;
  }
})();

function MyBooks() {
  let [filteredBooks, setFilteredBooks] = useState(BOOKS);
  let [activeCategoryId, setActiveCategoryId] = useState(null);

  function filterBooksByCategory(catId) {
    let books =
      catId === activeCategoryId
        ? BOOKS
        : BOOKS.filter((book) => {
            return !book.disabled && book.category.id === catId;
          });
    setActiveCategoryId(catId === activeCategoryId ? null : catId);
    setFilteredBooks(books);
  }

  const totalBooksCount = BOOKS.filter((book) => !book.disabled).length;

  return (
    <section className="my-books">
      {/* <Alert /> */}
      <div className="row mr-0">
        <LeftColumn
          books={filteredBooks}
          categories={BOOK_CATEGORIES}
          totalBooksCount={totalBooksCount}
          filterBooks={filterBooksByCategory}
          activeCategoryId={activeCategoryId}
        />
        <BooksCarousel books={filteredBooks} />
      </div>
    </section>
  );
}

export default MyBooks;
