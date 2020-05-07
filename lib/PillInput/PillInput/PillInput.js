import React, { useState, useEffect, useRef } from 'react';
import uuid from 'uuid/v1';
import { string, arrayOf, bool, instanceOf, shape, func } from 'prop-types';
import cx from 'classnames';
import { DeleteablePill } from '../DeleteablePill';
import { useKeyDownHandlers } from './useKeyDownHandlers';

const PillInput = ({
  className,
  checker,
  placeholder,
  onPillsChange,
  initialPills,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [pills, setPills] = useState(initialPills);
  const [inputValue, setInputValue] = useState('');

  const addPills = pillNames => {
    const pillsToAdd = pillNames.reduce((acc, pillName) => {
      if (!pillName) {
        return acc;
      }

      const isValid = !checker || checker.regex.test(pillName);
      return [...acc, { name: pillName, id: uuid(), isValid }];
    }, []);

    setPills([...pills, ...pillsToAdd]);
  };

  const removePill = id => {
    const newPills = pills.filter(pill => pill.id !== id);
    setPills(newPills);
  };

  const removeLastPill = () => {
    const newPills = pills.length > 1 ? pills.slice(0, pills.length - 1) : [];
    setPills(newPills);
  };

  const onChange = value => {
    const pillNamesFromValue = value.split(' ');
    const numberOfPillNames = pillNamesFromValue.length;

    if (numberOfPillNames === 1) {
      return setInputValue(value);
    }

    const lastPillNameIndex = numberOfPillNames - 1;

    const pillNamesToAdd = pillNamesFromValue.slice(0, lastPillNameIndex);
    addPills(pillNamesToAdd);

    const newValue = pillNamesFromValue.slice(lastPillNameIndex)[0];
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

  const containerClassName = cx(
    `${className} pill-input__container form__input h-padding-quarter h-padding-bottom-clear`,
    {
      'pill-input--focused': isFocused
    }
  );

  useEffect(() => {
    onPillsChange(pills);
  }, [pills]);

  const inputRef = useRef(null);

  useKeyDownHandlers({
    pills,
    addPills,
    removeLastPill,
    inputValue,
    setInputValue,
    inputRef
  });

  return (
    <div className={containerClassName}>
      {pills.map(({ id, name, isValid }) => {
        return (
          <DeleteablePill
            key={id}
            id={id}
            name={name}
            onRemove={() => removePill(id)}
            warning={isValid ? null : checker.warning}
          />
        );
      })}
      <input
        {...rest}
        ref={inputRef}
        placeholder={!pills.length ? placeholder : ''}
        className="pill-input__input h-margin-bottom-quarter h-margin-right-quarter h-padding-bottom-quarter h-padding-top-quarter h-padding-left-quarter h-padding-right-quarter"
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

const pillPropType = shape({ name: string, isValid: bool });

PillInput.propTypes = {
  className: string,
  placeholder: string,
  checker: shape({
    warning: string,
    regex: instanceOf(RegExp)
  }),
  onPillsChange: func,
  initialPills: arrayOf(pillPropType)
};

PillInput.defaultProps = {
  className: '',
  checker: null,
  placeholder: '',
  onPillsChange: () => {},
  initialPills: []
};

PillInput.exportedPropTypes = {
  pill: pillPropType
};

export { PillInput };
