import React from "react";
import LeftColumn from "./LeftColumn/LeftColumn";

const BOOK_CATEGORIES = {
  design: { id: "design", name: "design", count: 0 },
  front: { id: "front", name: "front-end", count: 0 },
  back: { id: "back", name: "back-end", count: 0 },
  other: { id: "other", name: "other", count: 0 },
};

const BOOKS = [
  {
    name: "JavaScript Enlightenment",
    author: "Cody Lindley",
    numOfPages: 141,
    readingDate: 2018,
    category: BOOK_CATEGORIES.front,
  },
  {
    name: "Fundamentals of computer programming with C#",
    author: "Svetlin Nakov & Co.",
    numOfPages: 1121,
    readingDate: 2019,
    category: BOOK_CATEGORIES.other,
  },
  {
    name: "Css Mastery",
    author: "Andy Budd",
    numOfPages: 1000,
    readingDate: 2019,
    category: BOOK_CATEGORIES.front,
  },
  {
    name: "Visual Design Solutions",
    author: "Connie Malamed",
    numOfPages: 1000,
    readingDate: 2019,
    category: BOOK_CATEGORIES.design,
  },
  {
    name: "Code Simplicity",
    author: "Max Kanat-Alexander",
    numOfPages: 78,
    readingDate: 2019,
    category: BOOK_CATEGORIES.other,
  },
  {
    name: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    numOfPages: 252,
    readingDate: 2019,
    category: BOOK_CATEGORIES.design,
  },
  {
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    numOfPages: 436,
    readingDate: 2020,
    category: BOOK_CATEGORIES.front,
  },
  {
    name: "PHP A Beginner’s Guide",
    author: "Vikram Vaswani",
    numOfPages: 453,
    readingDate: 2019,
    category: BOOK_CATEGORIES.back,
    visible: false,
  },
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    numOfPages: 431,
    readingDate: 2020,
    category: BOOK_CATEGORIES.other,
  },
  {
    name: "Design Thinking Handbook",
    author: "Eli Woolery",
    numOfPages: 110,
    readingDate: 2020,
    category: BOOK_CATEGORIES.design,
  },
  {
    name: "JavaScript Design Patterns",
    author: "Addy Osmani",
    numOfPages: 187,
    readingDate: 2020,
    category: BOOK_CATEGORIES.front,
  },
  {
    name: "Principles of Product Design",
    author: "Aaron Walter",
    numOfPages: 182,
    readingDate: 2020,
    category: BOOK_CATEGORIES.design,
  },
  {
    name: "The Clean Coder",
    author: "Robert C. Martin",
    numOfPages: 210,
    readingDate: 2020,
    category: BOOK_CATEGORIES.other,
  },
];

(function setCategoryBooksCount() {
  for (let book of BOOKS) {
    let cat = BOOK_CATEGORIES[book.category.id];
    cat.count = cat.count + 1;
  }
})();

console.log(BOOK_CATEGORIES);

function MyBooks() {
  return (
    <section className="my-books">
      <div className="row">
        <LeftColumn
          books={BOOKS}
          categories={BOOK_CATEGORIES}
          totalBooksCount={BOOKS.length}
        />
      </div>
    </section>
  );
}

export default MyBooks;
