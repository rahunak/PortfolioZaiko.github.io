import logo from './logo.svg';
import './files/css/bootstrap.min.css';
import './files/css/bootstrap.min.css.map';
import './files/css/style.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
