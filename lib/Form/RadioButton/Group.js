import React, { useState, useEffect } from 'react';
import RadioButton from '.';
import RadioButtonOther from './Other';

export function RadioButtonGroup({
  choices,
  onChangeHandler,
  labelMouseEnter,
  labelMouseLeave,
  overrideLabelDefault,
  active,
  disabled
}) {
  const checkedOption = choices.find(c => c.checked);
  const [selected, setSelected] = useState(choices.find(c => c.checked));
  const [otherOptionValue, setOtherOptionValue] = useState('');

  useEffect(() => {
    if (checkedOption?.id !== selected?.id) {
      setSelected(checkedOption)
    }
  }, [checkedOption]);

  const isChecked = choice => selected && choice.id === selected.id;

  const onChange = e => {
    const targetId = e.target.id;
    const selectedChoice = choices.find(c => c.id === targetId);
    setSelected(selectedChoice);
    onChangeHandler(selectedChoice);
  };

  const onTextChange = e => {
    const otherOption = choices.find(c => c.other_option);
    const { value } = e.target;
    setSelected(otherOption);
    setOtherOptionValue(value);
    onChangeHandler({
      ...otherOption,
      value
    });
  };

  return (
    <div>
      {choices.map(choice => {
        if (choice.other_option) {
          return (
            <RadioButtonOther
              {...choice}
              value={otherOptionValue || choice.value}
              key={choice.id}
              onChangeHandler={onChange}
              onTextChangeHandler={onTextChange}
              checked={isChecked(choice)}
              disabled={disabled}
            />
          );
        }
        return (
          <RadioButton
            {...choice}
            key={choice.id}
            onChangeHandler={onChange}
            checked={isChecked(choice)}
            highlightHover={false}
            overrideLabelDefault={overrideLabelDefault}
            labelMouseEnter={labelMouseEnter}
            labelMouseLeave={labelMouseLeave}
            active={active}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}

RadioButtonGroup.defaultProps = {
  overrideLabelDefault: false,
  labelMouseEnter: () => {},
  labelMouseLeave: () => {},
  active: false,
  disabled: false
};
