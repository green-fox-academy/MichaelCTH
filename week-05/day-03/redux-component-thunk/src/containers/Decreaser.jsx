import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCounter } from '../redux/actionCreater';

function Decreaser() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>The Decreaser</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </section>
  );
}

export default Decreaser;
