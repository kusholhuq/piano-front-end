import './App.css';
import { Piano } from './components/Piano';
import Header from './components/Header';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      view: 'landing page'
    }
  }

  setView = (screen) => {
    this.setState({
      view: screen
    })
  }

  render() {
    const {view} = this.state;
    let currentView;
    switch (view) {
      case 'landing page':
        currentView = <div>This is your landing page substitute</div>;
        break;
      case 'piano':
        currentView = (
          <div className="App">
              <Header />
            <div className="piano-container">
              <Piano />
            </div>
          </div>
        );
        break;
    }

    return (
      currentView
    );
  }

}

export default App;
