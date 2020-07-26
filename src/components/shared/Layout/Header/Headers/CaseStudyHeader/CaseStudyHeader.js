import React from "react";
import PropTypes from "prop-types";
import Header from "../../Header";

function CaseStudyHeader(props) {
  return (
    <Header
      heading={props.heading}
      imgUrl={props.imgUrl}
      alt={props.alt}
      headingLineColor={props.headingLineColor}
    >
      <section className="content d-flex flex-column justify-content-center">
        <p>
          MFG is a web app where users can find coaches, nutritionists, gyms and
          nutrition clinics. a user can reach for the desired staff member
          (coach or nutritionist), find an empty slot in their schedules and
          request a reservation or booking.
        </p>
        <p className="mb-0">
          Users can also find branches (gyms or clinics) based on the city and
          find info about them such as opening hours, available classes, photo
          gallery, addresses etc.
        </p>
      </section>
    </Header>
  );
}

CaseStudyHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  headingLineColor: PropTypes.string.isRequired,
};
export default CaseStudyHeader;
