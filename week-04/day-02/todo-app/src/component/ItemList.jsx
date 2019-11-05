import React from 'react';
import Item from './Item';

export default function ItemList(props) {
  const { items, delMethod, checkMethod } = props;
  return (
    <div>
      {items.map((item) => (
        <Item key={item.name} item={item} delMethod={delMethod} checkMethod={checkMethod} />
      ))}
    </div>
  );
}
