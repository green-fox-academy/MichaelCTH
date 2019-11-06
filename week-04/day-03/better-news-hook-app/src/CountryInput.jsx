import React from 'react';

function clickHandler(onClick) {
  const code = document.querySelector('input[type="text"]').value;
  if (!code.trim()) return;
  onClick(code);
}

export default function CountryInput(props) {
  return (
    <div className="input-form">
      <input type="text" placeholder="enter country code" />
      <input type="submit" value="Search" onClick={() => clickHandler(props.onClick)} />
    </div>
  );
}
