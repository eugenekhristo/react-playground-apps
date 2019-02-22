import React, { Component } from 'react';

class Stopwatch extends Component {
  state = {
    running: false,
    timeElapsed: 0,
    prevTimestamp: 0
  };

  timeLabel;

  handleOnStart = () => {
    this.setState({ running: true, prevTimestamp: Date.now() });
  };

  handleOnStop = () => {
    this.setState({ running: false });
  };

  handleOnReset = () => {
    this.setState({ timeElapsed: 0 });
  };

  onTick = () => {
    let { running, timeElapsed, prevTimestamp } = this.state;

    if (running) {
      timeElapsed = timeElapsed + (Date.now() - prevTimestamp);
      prevTimestamp = Date.now();
      this.setState({ timeElapsed, prevTimestamp });
    }
  };

  formatTime = timeElapsed => (timeElapsed / 1000).toFixed(1);

  render() {
    const { running, timeElapsed } = this.state;

    return (
      <div className="stopwatch">
        <h2>stopwatch</h2>
        <div className="stopwatch-time">{this.formatTime(timeElapsed)}</div>
        {running ? (
          <button onClick={this.handleOnStop}>Stop</button>
        ) : (
          <button onClick={this.handleOnStart}>Start</button>
        )}
        <button onClick={this.handleOnReset}>Reset</button>
      </div>
    );
  }

  componentDidMount() {
    this.timeLabel = setInterval(this.onTick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timeLabel);
  }
}

export default Stopwatch;
