import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const portfolioIconsPath = "/assets/images/portfolio/icons/";

function LinksList(props) {
  let links = props.links;
  let livePreview = links.livePreview;
  let caseStudy = links.caseStudy;

  return (
    <ul className="links-list list-unstyled m-0">
      <li title={caseStudy.title}>
        <Link to={`/case-study${caseStudy.link}`}>
          <img src={portfolioIconsPath + caseStudy.iconName} />
        </Link>
      </li>
      {livePreview.link ? (
        <li title={livePreview.title}>
          <a href={livePreview.link}>
            <img src={portfolioIconsPath + livePreview.iconName} />
          </a>
        </li>
      ) : null}

      <li title="Contact Me">
        <Link to="/contact">
          <img src={portfolioIconsPath + "email.svg"} />
        </Link>
      </li>
    </ul>
  );
}

LinksList.propTypes = {
  links: PropTypes.shape({
    caseStudy: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      iconName: PropTypes.string.isRequired,
    }),
    livePreview: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      iconName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default LinksList;
