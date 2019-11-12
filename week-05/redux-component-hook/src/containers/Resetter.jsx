import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter } from '../redux/actionCreater';

function Resetter() {
  const dispatch = useDispatch();
  return (
    <section>
      <h1>The Resetter</h1>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </section>
  );
}

export default Resetter;
