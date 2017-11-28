import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class App extends Component {
  render() {
    const total = (1 + 2 + 3) / 4;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My cool react app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{total}</p>
        <Box text="Box 1" title="New title"/>
        <Box text="Box 2" title="Ye Olde title"/>
        <Box text="Box 1000" title="Big Title"/>
      </div>
    );
  }
}

export default App;
