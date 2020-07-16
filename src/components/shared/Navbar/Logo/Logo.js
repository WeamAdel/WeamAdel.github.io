import React from "react";
import { Link } from "react-router-dom";
import { URL_PREFIX } from "../../../../config/config";
function Logo() {
  return (
    <Link className="logo" to="/" exact>
      W
    </Link>
  );
}

export default Logo;
