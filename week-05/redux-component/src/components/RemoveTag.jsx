import React from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../redux/actionCreater';

function RemoveTag({ tags, tagRemover }) {
  return (
    <section>
      <h1>Remove Tag</h1>
      {tags.map((tag) => (
        <div className="tag-list remove-list" key={tag} onClick={() => tagRemover(tag)}>
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

function mapDispatchToProps(dispatch) {
  return {
    tagRemover: (val) => dispatch(removeTag(val)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveTag);
