import './App.css';
import Navigator from './Navigator';
import Banner from './Banner';
import About from './About';
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from './Projects';

function App() {
  return (

    <div className="App">
    <div className="app-container">
      <Navigator/>
      <Banner/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      {/* <header className="App-header">
        <p style={{color: 'black'}}>
          Hello.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </div>
  );
}

export default App;
