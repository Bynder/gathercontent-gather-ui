import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import { string, instanceOf, shape, func } from 'prop-types';
import cx from 'classnames';
import { Item } from './Item';

const PillInput = ({ checker, placeholder, onPillsChange, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [pills, setPills] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addPills = pillNames => {
    const pillsToAdd = pillNames.reduce((acc, itemName) => {
      if (!itemName) {
        return acc;
      }

      const isValid = !checker || checker.regex.test(itemName);
      return [...acc, { name: itemName, id: uuid(), isValid }];
    }, []);

    setPills([...pills, ...pillsToAdd]);
  };

  const removeItem = id => {
    const newItems = pills.filter(item => item.id !== id);
    setPills(newItems);
  };

  const onChange = value => {
    const itemNamesFromValue = value.split(' ');
    const numberOfItemNames = itemNamesFromValue.length;

    if (numberOfItemNames === 1) {
      return setInputValue(value);
    }

    const lastItemNameIndex = numberOfItemNames - 1;

    const itemNamesToAdd = itemNamesFromValue.slice(0, lastItemNameIndex);
    addPills(itemNamesToAdd);

    const newValue = itemNamesFromValue.slice(lastItemNameIndex)[0];
    return setInputValue(newValue);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    addPills([inputValue]);
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
    onPillsChange(pills);
  }, [pills]);

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      const ENTER_KEY_CODE = 13;

      if (keyCode !== ENTER_KEY_CODE) {
        return;
      }

      addPills([inputValue]);
      setInputValue('');
    };

    const KEYDOWN_EVENT = 'keydown';
    document.addEventListener(KEYDOWN_EVENT, handleKeyDown);
    return () => document.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
  }, [inputValue]);

  return (
    <div className={className}>
      {pills.map(({ id, name, isValid }) => {
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
        placeholder={!pills.length ? placeholder : ''}
        className="item-input__input h-margin-bottom-half h-margin-right-half h-padding-bottom-quarter h-padding-top-quarter h-padding-left-half h-padding-right-half"
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

PillInput.propTypes = {
  placeholder: string,
  checker: shape({
    warning: string,
    regex: instanceOf(RegExp)
  }),
  onPillsChange: func
};

PillInput.defaultProps = {
  checker: null,
  placeholder: '',
  onPillsChange: () => {}
};

export { PillInput };
