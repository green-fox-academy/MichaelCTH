import React from 'react';

export default function SecondComponent(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
