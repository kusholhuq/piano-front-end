import React from 'react';
import { Key } from './Key';
import '../styles/Piano.css';

class Piano extends React.Component {
  render() {
    return (
      <div className="piano">
        <Key note="c"/>
        <Key note="df"/>
        <Key note="d"/>
        <Key note="ef"/>
        <Key note="e"/>
        <Key note="f"/>
        <Key note="gf"/>
        <Key note="g"/>
        <Key note="af"/>
        <Key note="a"/>
        <Key note="bf"/>
        <Key note="b"/>
      </div>
    )
  }
}

export { Piano };
