import React from "react";
import PropTypes from "prop-types";
import Pallet from "./Pallet/Pallet";
import Icon from "./Icon/Icon";
import Screenshot from "./Screenshot/Screenshot";
import Link from "./Link/Link";

function List(props) {
  let listClasses = ["m-0", "list-unstyled"];
  let components = {
    pallet: { name: Pallet, attr: "fill" },
    icon: { name: Icon, attr: "icon" },
    screenshot: { name: Screenshot, attr: "image" },
    link: { name: Link, attr: "link" },
  };
  let itemsJSX = props.items.map((item, index) => {
    let listComponentJSX = item;
    if (props.type) {
      if (!components[props.type]) {
        throw new Error(
          "Provided type does not match any of the existing components"
        );
      }
      listComponentJSX = React.createElement(components[props.type].name, {
        [components[props.type].attr]: item,
        projectName: props.projectName,
      });
    }
    return <li key={index}>{listComponentJSX}</li>;
  });

  if (props.iconType) listClasses.push(props.iconType);
  if (props.type) listClasses.push(props.type);

  return <ul className={listClasses.join(" ")}>{itemsJSX}</ul>;
}
List.propTypes = {
  items: PropTypes.array.isRequired,
  iconType: PropTypes.oneOf(["check", "contrast"]),
  type: PropTypes.oneOf(["pallet", "icon", "screenshot", "link"]),
  projectName: PropTypes.string.isRequired,
};
export default List;
