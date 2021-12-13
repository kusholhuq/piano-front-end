import React from 'react';
import { Key } from './Key';
import '../styles/Piano.css';
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from '../global/constants';

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
      <p>You can use your keyboard to press the piano keys</p>
    )


    // const instructionKeys = (
    //   <div className="instructionKeys">
    //     <div className="box upKey">Z</div>
    //     <div className="box upKey">S</div>
    //     <div className="box upKey">X</div>
    //     <div className="box upKey">D</div>
    //     <div className="box upKey">C</div>
    //     <div className="box upKey">V</div>
    //     <div className="box upKey">G</div>
    //     <div className="box upKey">B</div>
    //     <div className="box upKey">H</div>
    //     <div>N</div>
    //     <div>J</div>
    //     <div>M</div>
    //   </div>
    // )

    return (
      <div>
        <div className="instructions">
          {instructions}
        </div>
        <div className="piano">
          {keys}
        </div>
        {/* <div className="instructionKeys">
          {instructionKeys}
        </div> */}
        <div>
          {audioFiles}
        </div>
      </div>
    )
  }
}

export { Piano };
