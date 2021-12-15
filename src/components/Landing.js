import React from 'react';
import '../styles/Landing.css';
import reactLogo from '../assets/react.jpg';

export default function Landing (props) {

  return (
    <div className="background">
      <div className="landing-container">
        <h1 className="pac title">Melody</h1>
        <p className="rob sub-title">Play a tune on our virtual piano</p>
        <button
        className="rob get-started"
        onClick = {() => {props.setView("piano")}}
        >
          Get Started
        </button>
      </div>
      <div className="landing-info">
        <div className="row">
          <div className="circle img-1"></div>
          <div className="circle img-2"></div>
          <div className="circle img-3"></div>
        </div>
        <div className="info">
          info
        </div>
      </div>
    </div>

  )

}
