import React from "react";
import InfoList from "./InfoList/InfoList";
import Accounts from "./Accounts/Accounts";
import DownloadResume from "./DownloadResume/DownloadResume";

function Content() {
  return (
    <main className="content">
      <section className="contact-info">
        <p>
          I would love to hear from you or get your feedback
          <i className="fa fa-coffee ml-2" />
        </p>
        <InfoList />
        <Accounts />
        <DownloadResume />
      </section>
    </main>
  );
}

export default Content;
