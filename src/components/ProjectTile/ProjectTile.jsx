import React from 'react';

function ProjectTile({ project }) {
  const {
    src, href, alt, ariaLabel, title, subtitle,
  } = project;
  return (
    <div className="col-xl-4 col-md-6 col-sm-12 my-3">
      <div className="card shadow-sm project-tile">
        <a
          href={href}
          target="_blank"
          className="text-dark text-decoration-none align-middle blockForImage"
          rel="noreferrer"
        >
          <img
            className="bd-placeholder-img card-img-top blockForImage__image"
            src={src}
            alt={alt}
            aria-label={ariaLabel}
          />
          <div className="card-body">
            <p className="card-text text-center h3 projectItems">{title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{subtitle}</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;
