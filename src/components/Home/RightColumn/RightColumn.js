import React from "react";
import Avatar from "./Avatar/Avatar";
import Quote from "./../../shared/Quote/Quote";
import Coffee from "./Coffee/Coffee";

function RightColumn() {
  return (
    <div className="col-md-5 offset-1 order-first order-md-last">
      <div className="right-column">
        <div className="main-content">
          <Avatar />
          <Quote
            quote="The powers of a man's mind are directly proportioned to the quantity of coffee he drinks."
            cite="Sir James Mackintosh"
          />
          <Coffee />
        </div>
        <p>accounts</p>
      </div>
    </div>
  );
}

export default RightColumn;
