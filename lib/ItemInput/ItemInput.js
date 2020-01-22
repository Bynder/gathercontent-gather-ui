import React, { useState } from 'react';

const ItemInput = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onChange = value => {
    const itemsFromValue = value.split(' ');
    const numberOfItems = itemsFromValue.length;

    if (numberOfItems === 1) {
      return setInputValue(value);
    }

    const lastItemIndex = numberOfItems - 1;

    const itemsToAdd = itemsFromValue.slice(0, lastItemIndex);
    setItems([...items, ...itemsToAdd]);

    const newValue = itemsFromValue.slice(lastItemIndex);
    return setInputValue(newValue);
  };

  return (
    <div>
      {items.map(item => item)}
      <input
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </div>
  );
};

export { ItemInput };
