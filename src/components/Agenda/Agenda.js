import React from "react";
import Layout from "./../shared/Layout/Layout";
import TechCards from "./Cards/Cards";

function Agenda() {
  return (
    <Layout
      page="agenda"
      heading="my agenda"
      imgUrl="/assets/images/agenda/img.jpg"
      alt="ll"
    >
      <TechCards />
    </Layout>
  );
}

export default Agenda;
