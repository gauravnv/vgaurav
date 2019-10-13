import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        This is a placeholder website which will be updated soon!
        <p>
          Hello there, you beautiful human being :)
        </p>
        <a
          className="App-link"
          href="http://img.picturequotes.com/2/3/2523/you-are-important-quote-1.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Glad to see you here
        </a>
      </header>
    </div>
  );
}

export default App;
