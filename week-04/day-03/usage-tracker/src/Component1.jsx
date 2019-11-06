import React, { Component } from 'react';

class Component1 extends Component {
  componentDidMount() {
    const startTime = Math.floor(Date.now());
    this.setState({ startTime });
  }

  componentWillUnmount() {
    const endTime = Math.floor(Date.now());
    const { startTime } = this.state;
    this.props.addLog('Component 1', (endTime - startTime) / 1000);
  }

  render() {
    return <p>This is the content of Component 1</p>;
  }
}

export default Component1;
