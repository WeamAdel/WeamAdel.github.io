import React from "react";
import { Link } from "react-router-dom";
import { URL_PREFIX } from "./../../config/config";

function Home() {
  return (
    <Link to={"technologies"} exact>
      Technologies
    </Link>
  );
}

export default Home;
