import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Toggler from "./Toggler/Toggler";
import Menu from "./Menu/Menu";

function Navbar() {
  let [open, setMenuStatus] = useState(false);

  const toggleMenu = function () {
    console.log(open);
    setMenuStatus(!open);
  };

  if (!window.onscroll) {
    window.addEventListener("scroll", function () {
      // let menu = document.getElementById("main-nav-menu");
      // let menuHeight = menu.outerHeight();
      // console.log("off", window.pageYOffset);
      // console.log("menu", menuHeight);
      if (open /* && window.pageYOffset >= menuHeight */) {
        setMenuStatus(false);
      }
    });
  }

  return (
    <nav className="main-nav">
      <div className="my-container d-flex justify-content-between">
        <Logo />
        <Toggler toggleMenu={toggleMenu} />
      </div>
      {open ? <Menu /> : null}
    </nav>
  );
}

export default Navbar;
