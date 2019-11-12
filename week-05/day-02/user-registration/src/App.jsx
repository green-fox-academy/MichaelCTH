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
    const { username, emailAddress, password } = this.state;
    console.log({ username, emailAddress, password });
  }

  render() {
    const {
 username, emailAddress, password, nameValid, emailValid, passwordValid 
} = this.state;
    return (
      <div className="App">
        <h1>Sign Up</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.formChangeHandler}
            placeholder="username"
            required
          />

          <input
            type="email"
            name="emailAddress"
            value={emailAddress}
            onChange={this.formChangeHandler}
            placeholder="email"
            required
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={this.formChangeHandler}
            placeholder="password"
            required
          />

          <input
            disabled={!nameValid || !emailValid || !passwordValid}
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    );
  }
}

export default App;
