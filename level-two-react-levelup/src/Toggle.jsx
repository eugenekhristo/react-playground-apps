import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false
  };

  handleToggle = () => {
    this.setState({on: !this.state.on})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Show/hide</button>
        {this.state.on && this.props.children}
      </div>
    );
  }
}

export default Toggle;
