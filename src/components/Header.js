import React from 'react';
import '../styles/Header.css';

export default function Header(){
  return (
    <div className="navbar">
      <div className="half">
        <i class="fa fa-keyboard-o mr-2 fa-3x" aria-hidden="true"></i>
        <h2 className="pac mt-1">Melody</h2>
      </div>
      <div className="half justify-right">
        <div className="navbar-items">Piano Type</div>
        <div className="navbar-items">Landing Page</div>
      </div>
    </div>
  );
}
