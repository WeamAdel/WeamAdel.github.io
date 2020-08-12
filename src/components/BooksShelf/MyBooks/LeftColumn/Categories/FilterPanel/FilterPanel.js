import React from "react";
import PropTypes from "prop-types";

function SortPanel(props) {
  let dotsJSX = Object.values(props.categories).map((cat) => (
    <li
      key={cat.id}
      title={cat.name}
      className="dot"
      style={{ backgroundColor: cat.color }}
      onClick={() => {
        props.filterBooks(cat.id);
      }}
    />
  ));
  return (
    <div className="sort-panel">
      <ul className="list-unstyled">{dotsJSX}</ul>
    </div>
  );
}

SortPanel.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default SortPanel;
