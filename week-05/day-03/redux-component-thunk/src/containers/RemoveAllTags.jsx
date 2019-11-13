import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTags } from '../redux/actionCreater';

function RemoveAllTags() {
  const dispatch = useDispatch();
  return (
    <section>
      <h1>Remove All Tags</h1>
      <button onClick={() => dispatch(removeTags())}>Remove All Tags</button>
    </section>
  );
}

export default RemoveAllTags;
