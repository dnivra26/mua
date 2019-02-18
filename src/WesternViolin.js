import React, { Component } from 'react';
import Instrument from './Instrument';

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
        <Instrument notes={notes} />
      </div>
    );
  }
}


export default WesternViolin;
