import React from "react";
import PropTypes from "prop-types";
import Pallet from "./pallet";

function List(props) {
  let listClasses = ["m-0", "list-unstyled"];
  let itemsJSX = props.items.map((item, index) => {
    return (
      <li key={index}>
        {props.type === "pallet" ? <Pallet fill={item} /> : item}
      </li>
    );
  });

  if (props.iconType) listClasses.push(props.iconType);
  if (props.type) listClasses.push(props.type);

  return <ul className={listClasses.join(" ")}>{itemsJSX}</ul>;
}
List.propTypes = {
  items: PropTypes.array.isRequired,
  iconType: PropTypes.oneOf(["check", "contrast"]),
  type: PropTypes.oneOf(["pallet"]),
};
export default List;
