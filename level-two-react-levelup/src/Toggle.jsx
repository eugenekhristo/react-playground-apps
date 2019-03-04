import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false
  };

  handleToggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const { render } = this.props;
    const { on } = this.state;
    const handleToggle = this.handleToggle;

    return <React.Fragment>{render({ on, handleToggle })}</React.Fragment>;
  }
}

export default Toggle;
