import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ItemInput from './ItemInput';

class SelectUser extends Component {
  selectUser() {
    const { onClick } = this.props;
    const user = document.querySelector('input[type="text"]').value;
    if (!user.trim()) {
      alert('Please enter a valid name');
      return;
    }

    onClick(user);
    this.props.history.push({ pathname: '/themed', state: { user } });
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">SELECT USER</h1>
        <ItemInput label="Select" clickMethod={this.selectUser.bind(this)} />
      </div>
    );
  }
}

export default withRouter(SelectUser);
