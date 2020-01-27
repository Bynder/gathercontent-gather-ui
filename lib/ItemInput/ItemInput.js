import React, { useState, useEffect } from 'react';
import { string, instanceOf, shape, func } from 'prop-types';
import cx from 'classnames';
import { Item } from './Item';

const ItemInput = ({ checker, placeholder, onItemsChange, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [itemId, setItemId] = useState(0);

  const getItemId = () => {
    const id = itemId;

    setItemId(itemId + 1);

    return id;
  };

  const addItems = itemNames => {
    const itemsToAdd = itemNames.reduce((acc, itemName) => {
      if (!itemName) {
        return acc;
      }

      const isValid = !checker || checker.regex.test(itemName);
      return [...acc, { name: itemName, id: getItemId(), isValid }];
    }, []);

    setItems([...items, ...itemsToAdd]);
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
    addItems(itemNamesToAdd);

    const newValue = itemNamesFromValue.slice(lastItemNameIndex)[0];
    return setInputValue(newValue);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    addItems([inputValue]);
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
    onItemsChange(items);
  }, [items]);

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      const ENTER_KEY_CODE = 13;

      if (keyCode !== ENTER_KEY_CODE) {
        return;
      }

      addItems([inputValue]);
      setInputValue('');
    };

    const KEYDOWN_EVENT = 'keydown';
    document.addEventListener(KEYDOWN_EVENT, handleKeyDown);
    return () => document.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
  }, [inputValue]);

  return (
    <div className={className}>
      {items.map(({ id, name, isValid }) => {
        return (
          <Item
            key={id}
            id={id}
            name={name}
            onRemove={() => removeItem(id)}
            warning={isValid ? null : checker.warning}
          />
        );
      })}
      <input
        {...rest}
        placeholder={!items.length ? placeholder : ''}
        className="item-input__input h-margin-bottom-half h-margin-right-half h-padding-bottom-quarter h-padding-top-quarter h-padding-left-half h-padding-right-half"
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

ItemInput.propTypes = {
  placeholder: string,
  checker: shape({
    warning: string,
    regex: instanceOf(RegExp)
  }),
  onItemsChange: func
};

ItemInput.defaultProps = {
  checker: null,
  placeholder: '',
  onItemsChange: () => {}
};

export { ItemInput };
