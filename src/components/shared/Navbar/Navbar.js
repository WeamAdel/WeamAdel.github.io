import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Toggler from "./Toggler/Toggler";
import Menu from "./Menu/Menu";

function Navbar() {
  let [open, toggle] = useState(false);
  console.log(open);
  const toggleMenu = function () {
    console.log(open);
    toggle(!open);
  };

  // //if (!window.onscroll) {
  // window.addEventListener("scroll", function () {
  //   let menu = document.getElementById("main-nav-menu");
  //   console.log(menu);
  //   let menuHeight = menu ? menu.offsetHeight : 0;
  //   if (open && window.pageYOffset >= menuHeight) {
  //     toggle(false);
  //   }
  // });
  // //}

  // window.addEventListener("click", function (e) {
  //   console.log(e.target);
  // });

  return (
    <nav className="main-nav">
      <div className="my-container d-flex justify-content-between">
        <Logo />
        <Toggler toggleMenu={toggleMenu} />
      </div>
      <Menu open={open} />
    </nav>
  );
}

export default Navbar;
