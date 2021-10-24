import React from 'react';
import { Key } from './Key';
import '../styles/Piano.css';
import { NOTES } from '../global/constants';

class Piano extends React.Component {
  render() {

    const keys = NOTES.map((note, index) => {
      return (
        <Key
          key={index}
          note={note}
        />
      );
    })

    return (
      <div className="piano">
        {keys}
      </div>
    )
  }
}

export { Piano };
