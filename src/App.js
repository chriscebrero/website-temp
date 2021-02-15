import './App.css';
import Navigator from './Navigator';
import Banner from './Banner';
import About from './About';
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from './Projects';
import DocumentTitle from 'react-document-title';

function App() {
  return (
    <DocumentTitle title="Chris Cebrero | Software Engineer">
    <div className="App">
      <title>Chris Cebrero | Software Engineer</title>
      <div className="app-container">
        <Navigator/>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
      </div>
    </div>
    </DocumentTitle>
  );
}

export default App;
