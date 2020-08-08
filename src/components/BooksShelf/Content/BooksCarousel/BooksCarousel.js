import React from "react";

const BOOK_CATEGORIES = {
  design: "design",
  front: "front",
  back: "back",
  science: "science",
  other: "other",
};

const BOOKS = [
  {
    name: "JavaScript Enlightenment",
    author: "Cody Lindley",
    numOfPages: 141,
    readingDate: 2018,
    about: "",
  },
  {
    name: "Fundamentals of computer programming with C#",
    author: "Svetlin Nakov & Co.",
    numOfPages: 1121,
    readingDate: 2019,
    about: "",
  },
  {
    name: "Css Mastery",
    author: "Andy Budd",
    numOfPages: 1000,
    readingDate: 2019,
    about: "",
  },
  {
    name: "Visual Design Solutions",
    author: "Connie Malamed",
    numOfPages: 1000,
    readingDate: 2019,
    about: "",
  },
  {
    name: "Code Simplicity",
    author: "Max Kanat-Alexander",
    numOfPages: 78,
    readingDate: 2019,
    about: "",
  },
  {
    name: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    numOfPages: 252,
    readingDate: 2019,
    about: "",
  },
  {
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    numOfPages: 436,
    readingDate: 2020,
    about: "",
  },
  {
    name: "PHP A Beginner’s Guide",
    author: "Vikram Vaswani",
    numOfPages: 453,
    readingDate: 2019,
    about: "",
    visible: false,
  },
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    numOfPages: 431,
    readingDate: 2020,
    about: "",
  },
  {
    name: "Design Thinking Handbook",
    author: "Eli Woolery",
    numOfPages: 110,
    readingDate: 2020,
    about: "",
  },
  {
    name: "JavaScript Design Patterns",
    author: "Addy Osmani",
    numOfPages: 187,
    readingDate: 2020,
    about: "",
  },
  {
    name: "Principles of Product Design",
    author: "Aaron Walter",
    numOfPages: 182,
    readingDate: 2020,
    about: "",
  },
  {
    name: "The Clean Coder",
    author: "Robert C. Martin",
    numOfPages: 210,
    readingDate: 2020,
    about: "",
  },
];

function BooksCarousel() {
  return (
    <section className="books-carousel">
      <div className="my-container"></div>
    </section>
  );
}

export default BooksCarousel;
