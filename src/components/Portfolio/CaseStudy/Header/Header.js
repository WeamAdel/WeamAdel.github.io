import React from "react";
import PropTypes from "prop-types";
import HeaderImage from "./../../../shared/Layout/Header/HeaderImage/HeaderImage";

function Header(props) {
  const header = props.header;
  let descriptionJSX = header.description
    ? header.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))
    : "";
  return (
    <header>
      <div className="my-container">
        <div className="heading-wrapper">
          <h1 className="page-heading" data-color={props.mainThemeColor}>
            <span className="d-block">Case</span> Study
          </h1>
        </div>
        <div className="header-wrapper">
          <div className="image-wrapper">
            <HeaderImage imgUrl={header.imgUrl} alt={header.alt} />
          </div>
          <section className="content d-flex flex-column justify-content-center">
            <h2>{header.name}</h2>
            {descriptionJSX}
          </section>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  header: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  mainThemeColor: PropTypes.string.isRequired,
};
export default Header;
