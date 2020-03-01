import React from 'react';
import logo from './logo.png';
import DownloadOnAppStore from './DownloadOnAppStore.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Flix Clothing </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={DownloadOnAppStore} className="Download" alt="logo" />
      </header>
    </div>
  );
}

export default App;
