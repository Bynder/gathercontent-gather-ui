import React, { useState } from 'react';

const ItemInput = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onChange = value => {
    const inputItems = value.split(' ');
    const numberOfInputItems = inputItems.length;

    if (numberOfInputItems === 1) {
      return setInputValue(value);
    }

    const itemsToAdd = inputItems.slice(0, numberOfInputItems - 1);
    setItems([...items, ...itemsToAdd]);
    const remainingInputValue = inputItems.slice(numberOfInputItems - 1);
    return setInputValue(remainingInputValue);
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
