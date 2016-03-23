import React, { Component } from 'react';
import { range } from './util/Util';
import Menu from './components/Menu/Menu';

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>Hello React Motion Tutorial</h1>
        <Menu />
      </div>
  );
  }
}
