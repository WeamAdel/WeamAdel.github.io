import React from "react";
import PropTypes from "prop-types";
import InfoCard from "./InfoCard/InfoCard";

const BOOK_INFO = {
  author: { iconName: "author", title: "Book Author" },
  numOfPages: { iconName: "book", title: "Number Of Pages" },
  readingDate: { iconName: "calendar", title: "Reading Date" },
};

function Info(props) {
  const infoCardsJSX = Object.keys(props.book).map((key) => {
    if (BOOK_INFO[key]) {
      return (
        <InfoCard
          key={key}
          title={BOOK_INFO[key].title}
          value={props.book[key]}
          iconName={BOOK_INFO[key].iconName}
        />
      );
    }
  });
  return <div className="info">{infoCardsJSX}</div>;
}

Info.propTypes = {};

export default Info;
