import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {InteractiveLineup} from './Lineup'



class App extends Component {

    componentDidMount() {


        // fetch('/login')
        //     .then();



    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <span role="img" className="App-logo" alt="logo" aria-label="music note emoji" >🎵</span>
                <h1 className="App-title">Image map behavior using vector shapes</h1>
              </header>
              <InteractiveLineup/>
              {/* <div className="TracksAppSection">
                <h1>Tracks</h1>
                { this
                      .state
                      .tracks
                      .map(track => <div>
                                      { track.artist }
                                    </div>) }
              </div> */}
            </div>

            );
    }
}



export default App;
