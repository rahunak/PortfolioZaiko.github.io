import React from 'react';
import ContactsSection from '../regions/Main/ContactsSection/ContactsSection';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import style from './style.module.css';
function AboutMe() {
  return (
    <div className={style.aboutMe}>
        <WelcomeSection/>
        <ContactsSection/>
    </div>
  );
}

export default AboutMe;
