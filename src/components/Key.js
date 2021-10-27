import React from 'react';
import '../styles/Key.css';
import {NOTE_TO_KEY} from '../global/constants';

class Key extends React.Component {

  keyIsPressed = (note, pressedKeys) => {
    return pressedKeys.includes(NOTE_TO_KEY[note]);
  }

  noteIsFlat = (note) => {
    return note.length > 1;
  }

  render() {

    let keyClassName = "key";

    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
    if(noteIsFlat) {
      keyClassName += " flat";
    }
    if(keyIsPressed){
      keyClassName += " pressed";
    }

    let key;
    if (noteIsFlat) {
      key = (
        <div className={keyClassName}></div>
      )
    } else {
      key = (
        <div className={keyClassName}>
          <div className="key-text">
            {this.props.note.toUpperCase()}
          </div>
        </div>
      )
    }

    return key;
  }
}

export { Key }
