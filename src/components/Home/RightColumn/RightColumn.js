import React from "react";
import Avatar from "./Avatar/Avatar";
import Quote from "./../../shared/Quote/Quote";

function RightColumn() {
  return (
    <div className="col-md-5 offset-1">
      <div className="right-column text-light">
        <div className="">
          <Avatar />
          <Quote
            quote="The powers of a man's mind are directly proportioned to the quantity of coffee he drinks."
            cite="Sir James Mackintosh"
          />
        </div>
        <p>accounts</p>
      </div>
    </div>
  );
}

export default RightColumn;
