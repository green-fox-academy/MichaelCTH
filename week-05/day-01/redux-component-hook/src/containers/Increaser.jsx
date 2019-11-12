import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter } from '../redux/actionCreater';

function Increaser() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>The Increaser</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    </section>
  );
}

export default Increaser;
