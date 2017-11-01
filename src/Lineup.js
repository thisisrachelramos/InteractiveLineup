import React from 'react';
import Sound from 'react-sound';
import fabfourplain from './fabfour.png';


export class InteractiveLineup extends React.Component {
    render() {
        return (
            <div>
              <Lineup/> </div>
            );
    }

}


class Lineup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songUrl: "",
            songState: Sound.status.PAUSE,

        };
        this.playSong = this.playSong.bind(this);
    }

    componentDidMount() {}

    playSong(artistName, event) {
        var trackUrl = "";
        if (TRACKS[artistName] !== undefined) {
            trackUrl = TRACKS[artistName];
            console.log(trackUrl);
        }
        if (this.state.songUrl === trackUrl) {
            this.setState(prevState => ({

                songUrl: trackUrl,
                songState: prevState.songState === Sound.status.PLAYING ? Sound.status.PAUSE : Sound.status.PLAYING,



            }));
            console.log("play/pause toggle");
        } else {
            this.setState(prevState => ({

                songUrl: trackUrl,
                songState: Sound.status.PLAYING,


            }));
            console.log("song changed");
        }


    }

    render() {
        return (

            <div>
              <div>
                <Sound url={ this.state.songUrl } playStatus={ this.state.songState } volume={ 50 } />
                <svg viewBox="0 0 67 64" preserveAspectRatio="xMinYMin meet" height="64mm" width="67mm">
                  <image width="67" height="64" href={ fabfourplain }></image>
                  <g id="layer1" transform="translate(-40.254463,-73.105804)">
                    <a onClick={ (e) => this.playSong("george harrison", e) }>
                      { /* <a href="//georgeharrison.com/" id="george harrison"> */ }
                      <rect opacity="0" id="rect64" width="15" height="13" y="87" x="44"></rect>
                    </a>
                    { /* <a href="//paulmccartney.com/" id="paul mccartney"> */ }
                    <a onClick={ (e) => this.playSong("paul mccartney", e) }>
                      <rect opacity="0" y="86.623718" x="84.08667" height="15.501633" width="14.165285" id="rect76"></rect>
                    </a>
                    { /* <a href="//johnlennon.com/" id="john lennon"> */ }
                    <a onClick={ (e) => this.playSong("john lennon", e) }>
                      <rect opacity="0" y="114.95428" x="43.996235" height="16.303444" width="17.372517" id="rect78"></rect>
                    </a>
                    { /* <a href="//ringostarr.com/" id="ringo starr"> */ }
                    <a onClick={ (e) => this.playSong("ringo starr", e) }>
                      <rect opacity="0" y="120.0324" x="81.948509" height="11.22532" width="14.967093" id="rect80"></rect>
                    </a>
                  </g>
                </svg>
              </div>
              <p className="App-intro">
                <a href="https://en.wikipedia.org/wiki/The_Club_(dining_club)#Members">
                                                                                               Example of an old school image map using HTML
                                                                                           </a>
              </p>
            </div>
            );
    }
}


const TRACKS = {
    'john lennon': 'https://p.scdn.co/mp3-preview/8995c11b9e4a866f37eced30cdc2038667f50cb7?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
    'ringo starr': 'https://p.scdn.co/mp3-preview/30b539fb1196162985c2371c18c64037dbbfe53a?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
    'george harrison': 'https://p.scdn.co/mp3-preview/98f8c9e2c5cbbece916810df31644812081d8a69?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
    'paul mccartney': 'https://p.scdn.co/mp3-preview/d389aee6efbcef021a41a3296ac27c1fde18f4d7?cid=d8a5ed958d274c2e8ee717e6a4b0971d'
};

