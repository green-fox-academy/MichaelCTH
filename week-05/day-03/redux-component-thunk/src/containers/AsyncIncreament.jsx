import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delayedIncrease, delayStarted } from '../redux/actionCreater';

export default function AsyncIncrement() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  function submit() {
    dispatch(delayStarted());
    const increaseNum = document.querySelector('.increaseNum').value;
    const delaySec = document.querySelector('.delaySec').value;
    dispatch(delayedIncrease(parseInt(increaseNum, 10), parseInt(delaySec, 10)));
  }

  return (
    <section>
      <h1>Delayed Increaser</h1>
      <input className="increaseNum" type="number" name="increaseNum" />
      <input className="delaySec" type="number" name="delaySec" />
      <input type="submit" value="Increase" onClick={submit.bind(this)} />
      <p>{message}</p>
    </section>
  );
}
