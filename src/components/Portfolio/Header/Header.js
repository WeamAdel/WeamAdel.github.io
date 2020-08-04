import React from "react";
import HeaderImage from "./../../shared/Layout/Header/HeaderImage/HeaderImage";

function Header() {
  return (
    <header>
      <h1 className="page-heading">Portfolio</h1>
      <div className="header-wrapper">
        <HeaderImage
          imgUrl="/assets/images/portfolio/img.svg"
          alt="Lego shaped image filled with web components wireframes"
        />
        <section className="content">
          <p>
            Here are some of my latest projects, you can check each project's
            case study to learn more about it.
          </p>
        </section>
      </div>
    </header>
  );
}

export default Header;
