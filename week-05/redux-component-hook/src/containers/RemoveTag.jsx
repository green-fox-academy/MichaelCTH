import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTag } from '../redux/actionCreater';

function RemoveTag() {
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>Remove Tag</h1>
      {tags.map((tag) => (
        <div className="tag-list remove-list" key={tag} onClick={() => dispatch(removeTag(tag))}>
          {tag}
        </div>
      ))}
    </section>
  );
}

export default RemoveTag;
