import React from "react";
import PropTypes from "prop-types";
import Header from "../../Header";
import Quote from "./Quote/Quote";

function AgendaHeader(props) {
  return (
    <Header
      heading={props.heading}
      imgUrl={props.imgUrl}
      alt={props.alt}
      alt={props.flex}
    >
      <section className="content">
        <span className="lorem-bg"></span>
        <Quote />
      </section>
    </Header>
  );
}
export default AgendaHeader;
