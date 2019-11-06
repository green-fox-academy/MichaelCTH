import React, { Component } from 'react';

export default class CountryInput extends Component {
  clickHandler() {
    const code = document.querySelector('input[type="text"]').value;
    if (!code.trim()) return;
    this.props.onClick(code);
  }

  render() {
    return (
      <div className="input-form">
        <input type="text" placeholder="enter country code" />
        <input type="submit" value="Search" onClick={() => this.clickHandler()} />
      </div>
    );
  }
}
