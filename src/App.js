import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a new feature!
          New feature 2.0
          a new feature
        </p>
        <p>A new feature 3</p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          A better hotfix
        </a>
      </header>
    </div>
  );
}

export default App;
