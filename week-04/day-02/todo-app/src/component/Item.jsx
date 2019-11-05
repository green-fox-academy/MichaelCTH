import React from 'react';

export default function Item(props) {
  const { item, delMethod, checkMethod } = props;
  const normalStyle = 'fas fa-check-circle';
  return (
    <div className="todo-item">
      <span>{item.name}</span>
      <div data-name={item.name}>
        <i className="fas fa-trash " onClick={delMethod} />
        <i
          className={!item.checked ? normalStyle : normalStyle.concat(' purple')}
          onClick={checkMethod}
        />
      </div>
    </div>
  );
}
