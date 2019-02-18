import React, { Component } from 'react';
import Instrument from './Instrument';
import violin from './violin.png';

class WesternViolin extends Component {
  
  render() {
    const notes = [
      {
        frequency: 196.0,
        name: 'G'
      },
      {
        frequency: 293.7,
        name: 'D'
      },
      {
        frequency: 440.0,
        name: 'A'
      },
      {
        frequency: 659.3,
        name: 'E'
      },
    ];
    return (
      <div className="WesternViolin">
        <img src={violin} height={400}/> <br/>
        <Instrument notes={notes} />
      </div>
    );
  }
}


export default WesternViolin;
