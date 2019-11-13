import React from 'react';
import { useDispatch } from 'react-redux';
import { setCounter } from '../redux/actionCreater';

function Setter() {
  const dispatch = useDispatch();
  let inputVal = null;

  function handleInputVal(e) {
    inputVal = e.target.value;
  }

  function handleClick() {
    if (!inputVal) return;
    dispatch(setCounter(parseInt(inputVal, 10)));
  }

  return (
    <section>
      <h1>The Setter</h1>
      <input type="text" onChange={handleInputVal} />
      <button onClick={handleClick}>Set</button>
    </section>
  );
}

export default Setter;
