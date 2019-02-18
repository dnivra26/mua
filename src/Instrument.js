import React, { Component } from 'react';
import pizzicato from 'pizzicato';

class Instrument extends Component {
  constructor(){
    super();
    this.state = { nowPlaying: null, frequency: 0 };
    this.play = this.play.bind(this);
  }
  play(frequency) {
    
    if(this.state.nowPlaying != null) {
      this.state.nowPlaying.stop();
      if(this.state.frequency == frequency){
        this.setState({ nowPlaying: null, frequency: 0 });
        return;
      }
    }
    const sineWave = new pizzicato.Sound({
      source: 'wave',
      options: {
          frequency
      }
    });
    sineWave.play();
    this.setState({nowPlaying: sineWave, frequency});
  }
  render() {
    return (
      <div className="Instrument">
        {this.props.notes.map((note) => { return <button onClick={() => this.play(note.frequency)}>{note.name}</button>; } )}
      </div>
    );
  }
}

export default Instrument;
