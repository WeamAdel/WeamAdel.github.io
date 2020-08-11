import React from "react";
import PropTypes from "prop-types";
import InfoCard from "./InfoCard/InfoCard";

const BOOK_INFO_ICONS = {
  author: "author",
  numOfPages: "book",
  readingDate: "calendar",
};

function Info(props) {
  const infoCardsJSX = Object.keys(props.book).map((key) => {
    if (BOOK_INFO_ICONS[key]) {
      return (
        <InfoCard
          key={key}
          value={props.book[key]}
          iconName={BOOK_INFO_ICONS[key]}
        />
      );
    }
  });
  return <div className="info">{infoCardsJSX}</div>;
}

Info.propTypes = {};

export default Info;
