import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Item } from './Item';

const ItemInput = () => {
  const [isFocused, setIsFocused] = useState(false);

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
    setIsFocused(false);
  };

  const className = cx(
    'item-input__container form__input h-padding-bottom-clear',
    {
      'item-input--focused': isFocused
    }
  );

  useEffect(() => {
    const handleKeyPress = ({ keyCode }) => {
      const ENTER_KEY_CODE = 13;

      if (keyCode !== ENTER_KEY_CODE) {
        return;
      }

      addItem(inputValue);
      setInputValue('');
    };

    const KEYDOWN_EVENT = 'keydown';
    document.addEventListener(KEYDOWN_EVENT, event => handleKeyPress(event));
    return document.removeEventListener(KEYDOWN_EVENT, event =>
      handleKeyPress(event)
    );
  }, [inputValue]);

  return (
    <div className={className}>
      {items.map(({ id, name }) => (
        <Item key={id} name={name} onRemove={() => removeItem(id)} />
      ))}
      <input
        className="item-input__input h-margin-bottom-half h-margin-right-half h-padding-bottom-quarter h-padding-top-quarter h-padding-left-half h-padding-right-half"
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlur}
      />
    </div>
  );
};

export { ItemInput };
