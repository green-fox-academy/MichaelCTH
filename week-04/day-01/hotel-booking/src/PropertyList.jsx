import React from 'react';
import Property from './Property';

export default function PropertyList(props) {
  const { items } = props;
  return (
    <div>
      <h2>Hotel List</h2>
      {items.map((item) => (
        <Property key={item.name} data={item} />
      ))}
    </div>
  );
}
