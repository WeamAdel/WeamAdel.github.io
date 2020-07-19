import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Content from "./Content/Content";

function Layout(props) {
  let wrapperClasses = ["page-wrapper"];
  if (props.flex) wrapperClasses.push("flex");

  let flexLayoutJSX = (
    <>
      <div className="my-container">
        <h1 className="page-heading">{props.heading}</h1>
        <Header heading={props.heading} imgUrl={props.imgUrl} alt={props.alt} />
        <Content>{props.children}</Content>
      </div>
    </>
  );

  let normalLayoutJSX = (
    <>
      <div className="my-container">
        <h1 className="page-heading">{props.heading}</h1>
        <Header heading={props.heading} imgUrl={props.imgUrl} alt={props.alt} />
      </div>
      <Content>{props.children}</Content>
    </>
  );

  return (
    <div className={["page", props.page].join(" ")}>
      <div className={wrapperClasses.join(" ")}>
        {props.flex ? flexLayoutJSX : normalLayoutJSX}
      </div>
    </div>
  );
}

Layout.propTypes = {
  heading: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Layout;
