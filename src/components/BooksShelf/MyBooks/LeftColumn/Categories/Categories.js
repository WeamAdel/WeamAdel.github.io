import React from "react";
import PropTypes from "prop-types";
import Category from "./Category/Category";
import FilterPanel from "./FilterPanel/FilterPanel";

function Categories(props) {
  let categoryJSX = Object.values(props.categories).map((cat, index) => {
    return (
      <Category
        key={index}
        {...cat}
        percentage={(cat.count / props.totalBooksCount) * 100}
      />
    );
  });

  return (
    <div className="categories-wrapper">
      <div className="categories">
        <ul className="list-unstyled">{categoryJSX}</ul>
      </div>
      <FilterPanel
        categories={props.categories}
        filterBooks={props.filterBooks}
        activeCategoryId={props.activeCategoryId}
      />
    </div>
  );
}

const categoryShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

Categories.propTypes = {
  categories: PropTypes.shape({
    design: PropTypes.shape(categoryShape).isRequired,
    front: PropTypes.shape(categoryShape).isRequired,
    back: PropTypes.shape(categoryShape).isRequired,
    other: PropTypes.shape(categoryShape).isRequired,
  }),
};

export default Categories;
