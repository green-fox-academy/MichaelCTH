import React from 'react';
import { connect } from 'react-redux';
import { resetCounter } from '../redux/actionCreater';

function Resetter({ resetter }) {
  return (
    <section>
      <h1>The Resetter</h1>
      <button onClick={resetter}>Reset</button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    resetter: () => dispatch(resetCounter()),
  };
}
export default connect(
  null,
  mapDispatchToProps,
)(Resetter);
