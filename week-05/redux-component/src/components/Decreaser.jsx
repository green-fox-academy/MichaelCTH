import React from 'react';
import { connect } from 'react-redux';
import { decreaseCounter } from '../redux/actionCreater';

function Decreaser({ counter, decreament }) {
  return (
    <section>
      <h1>The Decreaser</h1>
      <p>{counter}</p>
      <button onClick={decreament}>Decrease</button>
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
    decreament: () => dispatch(decreaseCounter()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Decreaser);
