import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      list: [],
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  formChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitHandler(e) {
    e.preventDefault();
    const { firstName, lastName, email } = this.state;
    this.setState({ list: [firstName, lastName, email] });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { firstName, lastName, email, list } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="firstName">
            First Name:
            <input
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={this.formChangeHandler}
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={this.formChangeHandler}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.formChangeHandler}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {list.length === 0 ? null : <h1>Submission Result</h1>}
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
