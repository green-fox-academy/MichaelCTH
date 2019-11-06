import React, { Component } from 'react';

class Component2 extends Component {
  componentDidMount() {
    const startTime = Math.floor(Date.now());
    this.setState({ startTime });
  }

  componentWillUnmount() {
    const endTime = Math.floor(Date.now());
    const { startTime } = this.state;
    this.props.addLog('Component 2', (endTime - startTime) / 1000);
  }

  render() {
    return <p>This is the content of Component 2</p>;
  }
}

export default Component2;
