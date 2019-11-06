import React, { Component } from 'react';

class Component3 extends Component {
  componentDidMount() {
    const startTime = Math.floor(Date.now());
    this.setState({ startTime });
  }

  componentWillUnmount() {
    const endTime = Math.floor(Date.now());
    const { startTime } = this.state;
    this.props.addLog('Component 3', (endTime - startTime) / 1000);
  }

  render() {
    return <p>This is the content of Component 3</p>;
  }
}

export default Component3;
