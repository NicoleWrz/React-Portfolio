import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio({
  title,
  subtitle,
  description,
  image,
  link,
  github,
}) {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="img-wrap">
          <div className="image-box">
            <div>
              <img src={image} alt="Screenshot of Project" />
            </div>
          </div>
          <div className="img-description">
            <a href={link} target="_blank" rel="noreferrer">
              <div className="portfolio-title">{title}</div>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-3x">
                <FontAwesomeIcon className="githubicon" icon={faGithub} />
              </i>
            </a>
          </div>
        </div>
        <div className='info-box'>
        <p>{description}</p>
        <h6 className='subtitle'>{subtitle}</h6>
        </div>
      </div>
    </React.Fragment>
  )
}