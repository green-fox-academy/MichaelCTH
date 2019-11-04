import React from 'react';
import Filter from './Filter';

export default function Sidebar(props) {
  const { items } = props;
  return (
    <div>
      <h2 className="placeholder">placeholder</h2>
      <Filter data={items['Star rating']} name="Star rating" />
      <Filter data={items['Property type']} name="Property type" />
    </div>
  );
}
