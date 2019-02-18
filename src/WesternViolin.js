import React, { Component } from 'react';
import pizzicato from 'pizzicato';

class WesternViolin extends Component {
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
      <div className="WesternViolin">
        <button onClick={() => this.play(196.0)}>G3</button>
        <button onClick={() => this.play(293.7)}>D4</button>
        <button onClick={() => this.play(440.0)}>A4</button>
        <button onClick={() => this.play(659.3)}>E5</button>
      </div>
    );
  }
}

export default WesternViolin;
