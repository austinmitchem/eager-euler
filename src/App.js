import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a new feature!
          And this is a new line.
        </p>
        <p>
          Something else!!! more features for next release
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <p>this is a hotfix!!</p>
      <p><strong>hello there</strong></p>
    </div>
  );
}

export default App;
