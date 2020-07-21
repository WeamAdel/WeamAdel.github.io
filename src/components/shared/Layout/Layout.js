import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Content from "./Content/Content";
import AgendaHeader from "./Header/Headers/AgendaHeader/AgendaHeader";

function Layout(props) {
  const headerProps = {
    heading: props.heading,
    imgUrl: props.imgUrl,
    alt: props.alt,
  };
  const HEADERS = {
    agenda: <AgendaHeader {...headerProps} />,
    default: <Header {...headerProps} />,
  };
  const headerJSX = HEADERS[props.page] ? HEADERS[props.page] : HEADERS.default;
  const pageContentsJSX = (
    <>
      <div className={`page-wrapper ${props.flex ? "flex" : ""}`}>
        {headerJSX}
        <Content>{props.children}</Content>
      </div>
    </>
  );
  let flexLayoutJSX = <div className="my-container">{pageContentsJSX}</div>;

  return (
    <div className={["page", props.page].join(" ")}>
      {props.flex ? flexLayoutJSX : pageContentsJSX}
    </div>
  );
}

Layout.propTypes = {
  page: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Layout;
