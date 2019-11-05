import React from 'react';

export default function ItemInput(props) {
  const { clickMethod, label } = props;
  return (
    <div className="inputForm">
      <input type="text" />
      <input type="submit" className="button-text" value={label} onClick={clickMethod} />
    </div>
  );
}
