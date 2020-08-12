import React from "react";
import PropTypes from "prop-types";
import PenWriting from "./PenWriting";

function Preview(props) {
  return (
    <div className="preview">
      <div className="pen-img">
        <img src="/assets/images/books/pen.png" />
        <PenWriting stroke={props.categoryColor} />
      </div>
      <div className="book-img">
        <img
          src={"/assets/images/books/covers/" + props.imgName + ".png"}
          alt={props.bookName + " Cover Image"}
        />
      </div>
    </div>
  );
}

Preview.propTypes = {
  imgName: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default Preview;
