import React from 'react';
import { useSelector } from 'react-redux';

function ComplexCounter() {
  const counter = useSelector((state) => state.counter);
  const tagLen = useSelector((state) => state.tags.length);
  return (
    <section>
      <h1>Complex Counter</h1>
      <p>{counter + tagLen}</p>
    </section>
  );
}

export default ComplexCounter;
