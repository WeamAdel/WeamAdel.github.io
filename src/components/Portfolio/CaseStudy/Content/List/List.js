import React from "react";
import PropTypes from "prop-types";

function List(props) {
  let listClasses = ["m-0"];
  let itemsJSX = props.items.map((item, index) => <li key={index}>{item}</li>);

  if (props.iconType) listClasses.push(props.iconType);
  return <ul className={listClasses.join(" ")}>{itemsJSX}</ul>;
}
List.propTypes = {
  items: PropTypes.array.isRequired,
  iconType: PropTypes.oneOf(["check", "contrast"]),
};
export default List;
