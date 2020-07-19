import React from "react";
import Layout from "./../shared/Layout/Layout";
import InfoList from "./InfoList/InfoList";
import Accounts from "./Accounts/Accounts";

function Contact() {
  return (
    <Layout
      page="contact"
      heading="contact me"
      imgUrl="/assets/images/contact/img.svg"
      alt="Egypt's map with pharaonic face"
      flex={true}
    >
      <section className="content">
        <p>
          I would love to hear from you or get your feedback
          <i className="fa fa-coffee ml-2" />
        </p>
        <InfoList />
        <Accounts />
      </section>
    </Layout>
  );
}

export default Contact;
