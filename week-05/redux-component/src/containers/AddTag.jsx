import React from 'react';
import { connect } from 'react-redux';
import { addTag } from '../redux/actionCreater';

function AddTag({ addTag }) {
  let inputVal = null;

  function handleInputVal(e) {
    inputVal = e.target.value;
  }

  function handleClick() {
    if (!inputVal) return;
    addTag(inputVal);
  }

  return (
    <section>
      <h1>Add Tag</h1>
      <input type="text" onChange={handleInputVal} />
      <button onClick={handleClick}>Add</button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addTag: (val) => dispatch(addTag(val)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(AddTag);
