import React from "react";
import PropTypes from "prop-types";
import Header from "../../Header";
import Quote from "./../../../../Quote/Quote";

function AgendaHeader(props) {
  return (
    <Header heading={props.heading} imgUrl={props.imgUrl} alt={props.alt}>
      <section className="content">
        <span className="lorem-bg"></span>
        <Quote
          cite="Morgan Freeman"
          quote="I'm always trying new things and learning new things. If there isn't
        anything more you can learn - go off and die"
        />
      </section>
    </Header>
  );
}
export default AgendaHeader;
