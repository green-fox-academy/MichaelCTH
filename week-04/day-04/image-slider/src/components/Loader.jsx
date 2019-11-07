import React from 'react';
import '../css/Loader.css';

export default function Loader() {
  return (
    <div className="App App-header">
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <h1>Loading</h1>
    </div>
  );
}
