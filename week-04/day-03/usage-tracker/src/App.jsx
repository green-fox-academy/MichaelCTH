import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Table from './Table';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

class LoadLogger extends Component {
  constructor(props) {
    super(props);
    this.state = { log: [] };
  }

  addLoadLog(name, time) {
    const { log } = this.state;
    log.push({ name, time });
    this.setState({ log });
  }

  render() {
    const { log } = this.state;
    return (
      <BrowserRouter>
        <Nav />
        <Table log={log} />
        <div className="App" />
        <Route
          path="/component1"
          render={() => <Component1 addLog={(name, time) => this.addLoadLog(name, time)} />}
        />
        <Route
          path="/component2"
          render={() => <Component2 addLog={(name, time) => this.addLoadLog(name, time)} />}
        />
        <Route
          path="/component3"
          render={() => <Component3 addLog={(name, time) => this.addLoadLog(name, time)} />}
        />
      </BrowserRouter>
    );
  }
}

export default LoadLogger;
