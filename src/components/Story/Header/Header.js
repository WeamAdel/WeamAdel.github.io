import React from "react";
import Text from "./Text/Text";
import Image from "./Image/Image";

function Header() {
  return (
    <header>
      <div className="my-container">
        <div className="row">
          <Text />
          <Image />
        </div>
      </div>
    </header>
  );
}

export default Header;
