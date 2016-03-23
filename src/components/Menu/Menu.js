import React, { Component } from 'react';
import { mainButton, childButtonBefore, childButtonAfter } from './MenuStyles';
import { NUM_CHILDREN } from '../../constants/Constants';
import { range } from '../../util/Util';
import { Motion } from 'react-motion';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      childButtons: [],
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderChildren() {
    return range(NUM_CHILDREN).map(i => {
      return (
        <Motion key={i} style={
            this.state.isOpen ? childButtonAfter(i) : childButtonBefore()
          }
        >
          { ({width, height, top, left}) => <div className="child-button" style={{width, height, top, left}} /> }
        </Motion>
      );
    });
  }

  componentDidMount() {
    let childButtons = [];
    range(NUM_CHILDREN).forEach(i => {
      childButtons.push(this.renderChildren(i));
    });
    this.setState({ childButtons: childButtons.slice(0) });
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
