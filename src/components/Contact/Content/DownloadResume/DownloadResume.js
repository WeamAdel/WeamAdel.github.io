import React from "react";

function DownloadResume() {
  return (
    <a
      href="/assets/files/resume.pdf"
      download="Weam Adel - Front End Engineer Resume"
      className="download-resume"
    >
      <i className="fa fa-download" />
      <span>Download My Resume</span>
    </a>
  );
}

export default DownloadResume;
