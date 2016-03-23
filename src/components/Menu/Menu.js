import React, { Component } from 'react';
import { mainButton, childButtonBefore, childButtonAfter } from './MenuStyles';
import { NUM_CHILDREN } from '../../constants/Constants';
import { range } from '../../util/Util';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderChildren() {
    return range(NUM_CHILDREN).map(i => {
      return (
        <div key={i} className="child-button" style={
            this.state.isOpen ? childButtonAfter(i) : childButtonBefore()
          }
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
        <div className="main-button" style={mainButton()} onClick={this.openMenu} />
      </div>
    );
  }
}

export default Menu;
