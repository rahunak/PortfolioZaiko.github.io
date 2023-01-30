import React, { useEffect } from 'react';
import '../src/gridTemplate.css';
import './files/css/bootstrap.min.css';
import './files/css/style.css';
import './files/scss/main.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Lettering from './components/letteringPage/Lettering';
import LeftGridBlock from './components/leftGridBlock/leftGridBlock';
import AboutMe from './components/aboutMe/AboutMe';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />

        <div className="LeftAndRightSides">
          <div className="leftGridBlock">

          </div>
          <div className="rightGridBlock">
            <Routes >
              <Route path='/lettering' element={<Lettering />} />
              <Route path='/projects' element={<ProjectsSection />} />
              <Route path='/lettering' element={<Lettering />} />
              <Route path='/lettering' element={<Lettering />} />

              {/* <Route path="/" element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path="dictionary" element={<DictionaryContainer />} />
              <Route path="about" element={<About />} /> */}
            </Routes >
          </div>
        </div>


      </div>
    );
  }

}