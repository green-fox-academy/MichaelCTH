import React from 'react';
import { connect } from 'react-redux';
import { removeTags } from '../redux/actionCreater';

function RemoveAllTags({ TagsRemover }) {
  return (
    <section>
      <h1>Remove All Tags</h1>
      <button onClick={TagsRemover}>Remove All Tags</button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    TagsRemover: () => dispatch(removeTags()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(RemoveAllTags);
