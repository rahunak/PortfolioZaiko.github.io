import React, { useEffect } from 'react';
import '../src/gridTemplate.css';
import './files/css/bootstrap.min.css';
import './files/css/style.css';
import './files/scss/main.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Lettering from './components/projects/letteringPage/Lettering';
import AboutMe from './components/aboutMe/AboutMe';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import CircleSlider from './components/projects/sliders/CircleSlider';
import MenuItems from './components/projects/menuItems/menuItems';
import Advice from './components/projects/advice/Advice';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
          <div className="rightGridBlock">
            <Routes >
              <Route path='/aboutMe' element={<AboutMe />} />
              <Route path='/projects' element={<ProjectsSection />} />
              <Route path='/projects/lettering' element={<Lettering />} />
              <Route path='/projects/circleSlider' element={<CircleSlider />} />
              <Route path='/projects/menuItems' element={<MenuItems />} />
              <Route path='/projects/advice' element={<Advice />} />
            </Routes >
          </div>
      </div>
    );
  }

}