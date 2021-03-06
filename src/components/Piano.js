import React from 'react';
import { Key } from './Key';
import '../styles/Piano.css';
import { NOTES, VALID_KEYS, KEY_TO_NOTE, NOTE_TO_KEY } from '../global/constants';

class Piano extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pressedKeys: []
    };
  }

  playNote = (note) => {
    if(note){
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }



  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)){
      updatedPressedKeys.push(key);
    }
    this.setState({
      pressedKeys: updatedPressedKeys
    })
    this.playNote(KEY_TO_NOTE[key]);
  }

  handleKeyUp = (event) => {
    const index = this.state.pressedKeys.indexOf(event.key);
    if(index > -1){
      const updatedPressedKeys = [...this.state.pressedKeys];
      updatedPressedKeys.splice(index, 1);
      this.setState({
        pressedKeys: updatedPressedKeys
      })
    }
    // if(index > -1){
    //   this.setState(state => ({
    //     pressedKeys: state.pressedKeys.splice(index, 1)
    //   }))
    // }
  }

  handleMouseDown = (note) => {
    // if (event.repeat) {
    //   return;
    // }
    // const key = event.key;
    const key = (NOTE_TO_KEY[note]);
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    this.setState({
      pressedKeys: updatedPressedKeys
    })
    this.playNote(KEY_TO_NOTE[key]);
  }

  handleMouseUp = (note) => {
    const index = this.state.pressedKeys.indexOf(NOTE_TO_KEY[note]);
    if (index > -1) {
      const updatedPressedKeys = [...this.state.pressedKeys];
      updatedPressedKeys.splice(index, 1);
      this.setState({
        pressedKeys: updatedPressedKeys
      })
    }
  }


  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);

  }


  render() {

    //here the NOTES array is converted into keys, we just need to switch another array
    //in here, and prepare more global constant for different arrangements of keys

    const keys = NOTES.map((note, index) => {
      return (
        <Key
          key={index}
          note={note}
          pressedKeys={this.state.pressedKeys}
          handleMouseDown={this.handleMouseDown}
          handleMouseUp={this.handleMouseUp}
        />
      );
    })


    const audioFiles = NOTES.map((note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../notes/${note}.mp3`}
        />
      );
    });

    const instructions = (
      <p>You can click/tap or use your keyboard to press the piano keys</p>
    )

    return (
      <div>
        <div className="instructions bump">
          {instructions}
        </div>
        <div className="piano bump-more">
          {keys}
        </div>
        <div>
          {audioFiles}
        </div>
      </div>
    )
  }
}

export { Piano };
