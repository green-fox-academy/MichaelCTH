import React from 'react';
import { connect } from 'react-redux';

function ComplexCounter({ counter, tagLen }) {
  return (
    <section>
      <h1>Complex Counter</h1>
      <p>{counter + tagLen}</p>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    tagLen: state.tags.length,
  };
}

export default connect(mapStateToProps)(ComplexCounter);
