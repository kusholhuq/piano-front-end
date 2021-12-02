import './App.css';
import { Piano } from './components/Piano';
import Header from './components/Header';
import Landing from './components/Landing';
import React from 'react';
import {Fragment} from 'react';

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
        currentView = <Landing setView = {this.setView} />;
        break;
      case 'piano':
        currentView = (
          <div className="App">
            <div className="piano-container">
              <Piano />
            </div>
          </div>
        );
        break;
    }

    return (
      <Fragment>
        <Header setView = {this.setView} />
        {currentView}
      </Fragment>

    );
  }

}

export default App;
