import React from "react";
import HeaderImage from "./../../shared/Layout/Header/HeaderImage/HeaderImage";

function Header() {
  return (
    <header>
      <h1 className="page-heading">Being Cooked</h1>
      <HeaderImage
        imgUrl="/assets/images/technologies/img.jpg"
        alt="Turned on mackbook pro near brown ceramic mug"
      />
    </header>
  );
}

export default Header;
