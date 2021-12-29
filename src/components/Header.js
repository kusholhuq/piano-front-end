import React from 'react';
import '../styles/Header.css';

export default function Header(props){
  return (
    <div className="navbar">
      <div className="half bump-up">
        <i class="fa fa-keyboard-o mr-2 fa-3x" aria-hidden="true"></i>
        <h2 className="pac mt-1">Melody</h2>
      </div>
      <div className="half bump-up justify-right">
        <div
        onClick={() => { props.setView("piano") }}
        className="navbar-items"
        >
          Piano
        </div>
        <div
        onClick = {() => {props.setView("landing page")}}
        className="navbar-items"
        >
          Home
        </div>
      </div>
    </div>
  );
}
