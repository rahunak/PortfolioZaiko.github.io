import React, { useEffect } from 'react';
import './files/css/bootstrap.min.css';
import './files/css/style.css';
import './files/js/bootstrap.bundle.min.js';
import './files/js/bootstrap.bundle.min.js.map';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
function App() {

  return (
    <div className="App">
      <Header /> 
      <Main />
    </div>
  );
}

export default App;
