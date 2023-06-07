import React, { useEffect } from 'react';
import '../src/gridTemplate.css';
import './files/css/bootstrap.min.css';
import './files/css/style.css';
import './files/scss/main.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/regions/Header/Header';
import Lettering from './components/projects/letteringPage/Lettering';
import AboutMe from './components/aboutMe/AboutMe';
import ProjectsSection from './components/regions/Main/ProjectsSection/ProjectsSection';
import CircleSlider from './components/projects/sliders/CircleSlider';
import MenuItems from './components/projects/menuItems/menuItems';
import Advice from './components/projects/advice/Advice';
import BackBtn from './components/buttons/backBtn/BackBtn';
import NoteEditor from './components/projects/noteEditor/NoteEditor';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
          <div className="rightGridBlock">
            <Routes >
              <Route path='/' element={<AboutMe />} />
              <Route path='/projects' element={<ProjectsSection />} />
              <Route path='/projects/lettering' element={<Lettering />} />
              <Route path='/projects/circleSlider' element={<CircleSlider />} />
              <Route path='/projects/menuItems' element={<MenuItems />} />
              <Route path='/projects/advice' element={<Advice />} />
              <Route path='/projects/noteEditor' element={<NoteEditor />} />
            </Routes > 
            <BackBtn path={window.location.pathname}/>
          </div>
      </div>
    );
  }

}