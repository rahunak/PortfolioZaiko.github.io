import React from 'react';
import style from './style.module.css';
function WelcomeSection() {
  return (
    <section id="welcome-section" className={style.wrapper + ' py-0 text-center col'}>
      <div className={style.wrapper +" mx-auto  d-flex flex-column justify-content-center align-items-center"}>
        <h1 className="fw-light display-1 fw-bold">Zaiko Eugeni</h1>
        <p className="lead text-muted display-6">a web developer</p>
      </div>
    </section>
  );
}
export default WelcomeSection;
