import React from "react";
import PropTypes from "prop-types";
import HeaderImage from "./../../shared/Layout/Header/HeaderImage/HeaderImage";
import Quote from "./../../shared/Quote/Quote";

function Header(props) {
  return (
    <header>
      <span className="lorem-bg" />
      <div className="container">
        <h1 className="page-heading">My Agenda</h1>
        <div className="header-wrapper">
          <HeaderImage
            imgUrl="/assets/images/agenda/img.jpg"
            alt="Labtop, checklist and calendar"
          />
          <section className="content">
            <Quote
              cite="Morgan Freeman"
              quote="I'm always trying new things and learning new things. If there isn't
        anything more you can learn - go off and die"
            />
          </section>
        </div>
      </div>
    </header>
  );
}
export default Header;
