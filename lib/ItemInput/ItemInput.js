import React, { useState } from 'react';
import { Item } from './Item';

const ItemInput = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = name => {
    if (!name) {
      return;
    }
    setItems([...items, { name, id: items.length + 1 }]);
  };

  const onChange = value => {
    const itemNamesFromValue = value.split(' ');
    const numberOfItemNames = itemNamesFromValue.length;

    if (numberOfItemNames === 1) {
      return setInputValue(value);
    }

    const lastItemNameIndex = numberOfItemNames - 1;

    const itemNamesToAdd = itemNamesFromValue.slice(0, lastItemNameIndex);
    itemNamesToAdd.forEach(itemName => addItem(itemName));

    const newValue = itemNamesFromValue.slice(lastItemNameIndex)[0];
    return setInputValue(newValue);
  };

  const onBlur = () => {
    addItem(inputValue);
    setInputValue('');
  };

  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <input
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onBlur={onBlur}
      />
    </div>
  );
};

export { ItemInput };
