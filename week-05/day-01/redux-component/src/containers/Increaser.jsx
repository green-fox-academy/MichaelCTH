import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter } from '../redux/actionCreater';

function Increaser({ counter, increment }) {
  return (
    <section>
      <h1>The Increaser</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increase</button>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increaseCounter()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Increaser);
