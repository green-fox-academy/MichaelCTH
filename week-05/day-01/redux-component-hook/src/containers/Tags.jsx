import React from 'react';
import { useSelector } from 'react-redux';

function Tags() {
  const tags = useSelector((state) => state.tags);
  return (
    <section>
      <h1>Tags</h1>
      {tags.map((tag) => (
        <div className="tag-list" key={tag}>
          {tag}
        </div>
      ))}
    </section>
  );
}

export default Tags;
