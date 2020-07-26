import React from "react";
import PropTypes from "prop-types";
import HeaderImage from "./../../../shared/Layout/Header/HeaderImage/HeaderImage";
function Header(props) {
  return (
    <header>
      <div className="my-container">
        <div className="heading-wrapper">
          {/* <span
            className="project-theme-line"
            style={{ backgroundColor: props.headingLineColor }}
          /> */}
          <h1 className="page-heading" data-color={props.headingLineColor}>
            <span className="d-block">Case</span> Study
          </h1>
        </div>
        <div className="header-wrapper">
          <div className="image-wrapper">
            <HeaderImage imgUrl={props.imgUrl} alt={props.alt} />
          </div>
          <section className="content d-flex flex-column justify-content-center">
            <h2>My Fitness Goal</h2>
            <p>
              MFG is a web app where users can find coaches, nutritionists, gyms
              and nutrition clinics. a user can reach for the desired staff
              member (coach or nutritionist), find an empty slot in their
              schedules and request a reservation or booking.
            </p>
            <p className="mb-0">
              Users can also find branches (gyms or clinics) based on the city
              and find info about them such as opening hours, available classes,
              photo gallery, addresses etc.
            </p>
          </section>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  headingLineColor: PropTypes.string.isRequired,
};
export default Header;
