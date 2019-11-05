/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Todo from './component/Todo';
import ThemeSwitcher from './component/ThemeSwitcher';
import SelectUser from './component/SelectUser';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  getUserList() {
    return this.state;
  }

  updateUserItem(newList) {
    this.setState({ data: newList });
  }

  selectUser(user) {
    const { data } = this.state;
    if (!data.some((i) => i.name === user)) {
      data.push({ name: user, items: [] });
      this.setState({ data });
    }
    this.setState({ curUser: user });
  }

  renderSelecterUser() {
    return <SelectUser onClick={this.selectUser.bind(this)} />;
  }

  renderThemeSwitcher() {
    return <ThemeSwitcher />;
  }

  renderTodo() {
    return (
      <Todo dataRead={this.getUserList.bind(this)} dataUpdate={this.updateUserItem.bind(this)} />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={this.renderSelecterUser.bind(this)} />
          <Route path="/themes" render={this.renderThemeSwitcher} />
          <Route path="/themed/:values?" render={this.renderTodo.bind(this)} />
          <Route render={() => <div className="App">404: Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
