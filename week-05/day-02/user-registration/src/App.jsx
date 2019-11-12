import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      emailAddress: '',
      password: '',
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      display: false,
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  formChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'username') {
      this.setState({ nameValid: value !== '' });
    } else if (name === 'emailAddress') {
      this.setState({ emailValid: value.includes('@') });
    } else if (name === 'password') {
      this.setState({ passwordValid: value.length >= 8 });
    }
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
 username, emailAddress, password, nameValid, emailValid, passwordValid 
} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.formChangeHandler}
              required
            />
          </label>
          <label htmlFor="emailAddress">
            Email:
            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={this.formChangeHandler}
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.formChangeHandler}
              required
            />
          </label>
          <input
            disabled={!nameValid || !emailValid || !passwordValid}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default App;
