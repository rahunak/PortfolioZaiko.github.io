import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
export type TProject = {
  src: string;
  href: string;
  alt: string;
  ariaLabel: string;
  title: string;
  subtitle: string;
  reactLinkTo:string;
}

class ProjectTile extends React.Component<any> { 
  constructor(props: TProject) {
    super(props);
  }
 render(){
  const reactLinkTo  = this.props.project.reactLinkTo;
  const src = this.props.project.src;
  const alt = this.props.project.alt;
  const ariaLabel = this.props.project.ariaLabel;
  const title = this.props.project.title;
  const subtitle = this.props.project.subtitle;
  const href = this.props.project.href;
  if(reactLinkTo){
    return(
      <div className="col-xl-4 col-md-6 col-sm-12 my-3 ">
      <Link to={reactLinkTo} className={styles.textLink}>
    <div className="card shadow-sm project-tile  align-middle blockForImage">
        <img
          className="bd-placeholder-img card-img-top blockForImage__image"
          src={src}
          alt={alt}
          aria-label={ariaLabel}
        />
        <div className="card-body">
          <p className="card-text text-center h3 projectItems ">{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className={styles.experiment}>{subtitle}</small>
          </div>
        </div>
    </div>
    </Link>
  </div>);
  }else{
    return(
      <div className="col-xl-4 col-md-6 col-sm-12 my-3">
        <div className="card shadow-sm project-tile">
          <a
            href={reactLinkTo?'':href}
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
      </div>);
  }
}

}

export default ProjectTile;
