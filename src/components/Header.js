import React from 'react';
import '../styles/Header.css';

export default function Header(){
  return (
    <div className="navbar">
      <div className="half">
        <div>Melody</div>
      </div>
      <div className="half justify-right">
        <div className="navbar-items">Piano Type</div>
        <div className="navbar-items">Landing Page</div>
      </div>


    </div>
  )
}
