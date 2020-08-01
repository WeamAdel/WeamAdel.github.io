import React from "react";
import HeaderImage from "./../../shared/Layout/Header/HeaderImage/HeaderImage";

function Header() {
  return (
    <header>
      <h1 className="page-heading">Contact Me</h1>
      <HeaderImage
        imgUrl="/assets/images/contact/img.svg"
        alt="Egypt's map with pharaonic face"
      />
    </header>
  );
}

export default Header;
