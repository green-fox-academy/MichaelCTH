import React from 'react';

export default function Filter(props) {
  const { name, data } = props;
  return (
    <div className="filter-box">
      <h3>{name}</h3>
      {data.map((item) => (
        <label key={item.name}>
          <input type="checkbox" id={item.name} checked={item.checked ? 'checked' : ''} />
          {item.name}
        </label>
      ))}
    </div>
  );
}
