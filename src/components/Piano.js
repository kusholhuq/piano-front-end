import React from 'react';
import { Key } from './Key';
import '../styles/Piano.css';
import { NOTES } from '../global/constants';

class Piano extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pressedKeys: []
    };
  }



  render() {

    const keys = NOTES.map((note, index) => {
      return (
        <Key
          key={index}
          note={note}
          pressedKeys={this.state.pressedKeys}
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
