import React from "react";
import ButtonBG from "./ButtonBG";

function SortButton(props) {
  return (
    <button
      onClick={props.flipSorting}
      className="sort-btn"
      title={props.title}
    >
      <ButtonBG />
    </button>
  );
}

export default SortButton;
