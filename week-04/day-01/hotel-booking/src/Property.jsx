import React from 'react';

export default function Property(props) {
  const { data } = props;
  return (
    <div className="property-item">
      <h3>{data.name}</h3>
      <img alt="property" src={data.imageURL} />
      <p>{data.description}</p>
      <input type="submit" value="Book Now!" />
    </div>
  );
}
