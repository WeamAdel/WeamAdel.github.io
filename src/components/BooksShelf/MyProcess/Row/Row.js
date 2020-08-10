import React from "react";
import PropTypes from "prop-types";
import Text from "./Text/Text";
import Image from "./Image/Image";

function Row(props) {
  return (
    <section className="process">
      <div className="row">
        <div className="image-col col-md-6 mb-md-0 mb-3">
          <Image image={props.process.image} />
        </div>
        <div className="text-col order-md-first col-md-6">
          <Text text={props.process.text} number={props.number} />
        </div>
      </div>
    </section>
  );
}

Row.propTypes = {
  process: PropTypes.shape({
    text: PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraphs: PropTypes.array.isRequired,
    }).isRequired,
    image: PropTypes.shape({
      name: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default Row;
