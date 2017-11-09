import React, { Component } from 'react';
import './App.css';
import { InteractiveLineup } from './Lineup'

class App extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span role="img" className="App-logo" alt="logo" aria-label="music note emoji">🎵</span>
          <h1 className="App-title">Image map behavior using vector shapes</h1>
        </header>
        <InteractiveLineup/>
      </div>

      );
  }
}



export default App;
