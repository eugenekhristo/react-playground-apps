import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false
  };

  handleToggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;
    const handleToggle = this.handleToggle;

    return children({ on, handleToggle });
  }
}

export default Toggle;
