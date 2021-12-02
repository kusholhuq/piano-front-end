import React from 'react';
import '../styles/Landing.css';


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
    </div>

  )

}
