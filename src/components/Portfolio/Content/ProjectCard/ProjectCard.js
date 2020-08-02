import React from "react";
import PropTypes from "prop-types";
import LinksList from "./LinksList/LinksList";
const portfolioImagesPath = "/assets/images/portfolio/projects/";

function ProjectCard(props) {
  return (
    <div className="card-wrapper">
      <LinksList links={props.redirect} />
      <section className="project-card">
        <div className="lines">
          <span />
          <span />
          <span />
        </div>
        <p className="item idea">{props.idea}</p>
        <img
          className="item top"
          src={`${portfolioImagesPath + props.imagesDir}/top.jpg`}
        />
        <p className="item release-date">{props.releaseDate}</p>
        <img
          className="item left"
          src={`${portfolioImagesPath + props.imagesDir}/left.jpg`}
        />
        <h2 className="item name">{props.name}</h2>
        <div className="item info">
          <p className="description">{props.description}</p>
          <p className="category">{props.category}</p>
        </div>
        <img
          className="item main"
          src={`${portfolioImagesPath + props.imagesDir}/main.jpg`}
        />
        <p className="item type">{props.type}</p>
        <img
          className="item right"
          src={`${portfolioImagesPath + props.imagesDir}/right.jpg`}
        />
      </section>
    </div>
  );
}

ProjectCard.propTypes = {
  imagesNames: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  idea: PropTypes.string.isRequired,
  imagesDir: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  redirect: PropTypes.shape({
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
    contact: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      iconName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default ProjectCard;
