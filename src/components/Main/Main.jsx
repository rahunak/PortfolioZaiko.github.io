import React from 'react';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ContactsSection from '../ContactsSection/ContactsSection';

function Main() {
  return (
    <main className="rightGridBlock">
      <WelcomeSection />
    
      <ProjectsSection />

      <ContactsSection />
    </main>
  );
}

export default Main;
