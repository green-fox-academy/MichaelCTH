import React from 'react';
import { useDispatch } from 'react-redux';
import { addTag } from '../redux/actionCreater';

function AddTag() {
  let inputVal = null;
  const dispatch = useDispatch();

  function handleInputVal(e) {
    inputVal = e.target.value;
  }

  function handleClick() {
    if (!inputVal) return;
    dispatch(addTag(inputVal));
  }

  return (
    <section>
      <h1>Add Tag</h1>
      <input type="text" onChange={handleInputVal} />
      <button onClick={handleClick}>Add</button>
    </section>
  );
}

export default AddTag;
