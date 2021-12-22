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

    const keyboardKey = NOTE_TO_KEY[this.props.note].toUpperCase();


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
        <div
        className={keyClassName}
        onMouseDown={() => { this.props.handleMouseDown(this.props.note) }}
        onMouseUp={() => { this.props.handleMouseUp(this.props.note) }}
        >
          <div className="button-flat">{keyboardKey}</div>
        </div>
      )
    } else {
      key = (
        <div
          className={keyClassName}
          onMouseDown={() =>{this.props.handleMouseDown(this.props.note)}}
          onMouseUp={() => { this.props.handleMouseUp(this.props.note) }}

        >
          <div className="key-text">
            <div className="button">{keyboardKey}</div>
          </div>
        </div>
      )
    }

    return key;
  }
}

export { Key }
