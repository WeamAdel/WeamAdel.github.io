import React from "react";
import PropTypes from "prop-types";
import Intro from "./Intro/Intro";
import Categories from "./Categories/Categories";

function LeftColumn(props) {
  return (
    <div className="col-md-6">
      <section className="left-column">
        <div className="my-container">
          <Intro />
          <Categories
            categories={props.categories}
            totalBooksCount={props.totalBooksCount}
            filterBooks={props.filterBooks}
            activeCategoryId={props.activeCategoryId}
          />
        </div>
      </section>
    </div>
  );
}

const categoryShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

const categoriesShape = {
  design: PropTypes.shape(categoryShape).isRequired,
  front: PropTypes.shape(categoryShape).isRequired,
  back: PropTypes.shape(categoryShape).isRequired,
  other: PropTypes.shape(categoryShape).isRequired,
};

LeftColumn.propTypes = {
  categories: PropTypes.shape(categoriesShape).isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      numOfPages: PropTypes.number.isRequired,
      readingDate: PropTypes.number.isRequired,
      category: PropTypes.shape(categoryShape),
    })
  ).isRequired,
};

export default LeftColumn;
