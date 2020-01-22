import React, { useState } from 'react';
import { Item } from './Item';

const ItemInput = () => {
  const [itemId, setItemId] = useState(0);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getNextItemId = () => {
    const nextItemId = itemId;

    setItemId(itemId + 1);

    return nextItemId;
  };

  const addItem = name => {
    if (!name) {
      return;
    }
    setItems([...items, { name, id: getNextItemId() }]);
  };

  const removeItem = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
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
      {items.map(({ id, name }) => (
        <Item key={id} name={name} onRemove={() => removeItem(id)} />
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
