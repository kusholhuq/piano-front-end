import React from 'react';
import { Key } from './Key';

class Piano extends React.Component {
  render() {
    return (
      <div>
        <Key/>
        <Key/>
        <Key/>
      </div>
    )
  }
}

export { Piano };
