import React from 'react';
import { connect } from 'react-redux';
import { setCounter } from '../redux/actionCreater';

function Setter({ setter }) {
  let inputVal = null;

  function handleInputVal(e) {
    inputVal = e.target.value;
  }

  function handleClick() {
    if (!inputVal) return;
    setter(parseInt(inputVal, 10));
  }

  return (
    <section>
      <h1>The Setter</h1>
      <input type="text" onChange={handleInputVal} />
      <button onClick={handleClick}>Set</button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setter: (val) => dispatch(setCounter(val)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Setter);
