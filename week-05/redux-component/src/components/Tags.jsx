import React from 'react';
import { connect } from 'react-redux';

function Tags({ tags }) {
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

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}

export default connect(mapStateToProps)(Tags);
