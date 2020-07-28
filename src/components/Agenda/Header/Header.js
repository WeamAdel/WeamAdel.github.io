import React from "react";
import HeaderImage from "./../../shared/Layout/Header/HeaderImage/HeaderImage";
import Quote from "./../../shared/Quote/Quote";
import Icons from "./Icons/Icons";

function Header(props) {
  return (
    <header>
      <span className="lorem-bg" />
      <Icons />
      <div className="my-container">
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
