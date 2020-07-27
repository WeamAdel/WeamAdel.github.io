import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
// import Layout from "./../shared/Layout/Layout";
// import TechCards from "./Cards/Cards";

function Agenda() {
  return (
    <div className="page agenda">
      <div className="page-wrapper">
        <Header />
        <Content />
      </div>
    </div>
    // <Layout
    //   page="agenda"
    //   heading="my agenda"
    //   imgUrl="/assets/images/agenda/img.jpg"
    //   alt="Labtop, checklist and calendar"
    // >
    //   <TechCards />
    // </Layout>
  );
}

export default Agenda;
