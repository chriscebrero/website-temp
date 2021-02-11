import './App.css';
import Navigator from './Navigator';
import Banner from './Banner';

function App() {
  return (

    <div className="App">
    <div className="app-container">
      <Navigator/>
      <Banner/>
      <header className="App-header">
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
      </header>
    </div>
    </div>
  );
}

export default App;
