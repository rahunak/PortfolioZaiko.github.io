import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../files/css/commonStyle.css';
function Header() {
  return (
    <header className="header headerGridBlock">
      <div className="collapse bg-dark fixed-top" id="navbarHeader">
        <div className="row px-5">
          <div className="col-sm-4 col-md-4 py-4">
            <h4 className="text-white">About</h4>
            <p className="text-muted">
              Name:
              {' '}
              <b>Eugenii</b>
              <br />
              Surname:
              <b>Zaiko</b>
              <br />
              Phone:
              <span className="phone">+375257810998</span>
              <br />
              English: B1
              <br />
            </p>
          </div>
          <div className="col-sm-4 col-md-4 py-4">
            <h4 className="text-white">Skills</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/rahunak?tab=repositories"
                  className="text-white text-decoration-none"
                  id="profile-link"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rahunak/"
                  className="text-white text-decoration-none"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a target="_blank" href="https://t.me/smallRabbit66" className="text-white text-decoration-none" rel="noreferrer">Telegram</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://rabota.by/resume/870a400cff08f76f6e0039ed1f364437514b58"
                  className="text-white text-decoration-none"
                  rel="noreferrer"
                >
                  Rabota.by
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark shadow-sm px-5 fixed-top" id="navbar">
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <NavLink to='projects' className="NavLink_white gradientLink">
        Projects
        </NavLink>
        <NavLink to='aboutMe' className="NavLink_white gradientLink">
          About me
        </NavLink>
        

        
      </nav>
    </header>
  );
}

export default Header;
