import React, { useState, useEffect } from 'react';
import Checkbox from '.';

export function CheckboxGroup({
  choices,
  onAddingChoice,
  onRemovingChoice,
  labelMouseEnter,
  labelMouseLeave,
  overrideLabelDefault,
  active,
  disabled
}) {
  const checkedChoices = choices.filter(c => c.checked);
  const [selected, setSelected] = useState(checkedChoices);

  useEffect(() => {
    if (checkedChoices?.length !== selected?.length) {
      setSelected(checkedChoices);
    }
  }, [checkedChoices?.length]);

  const isChecked = choice =>
    selected.filter(c => c.id === choice.id).length > 0;

  const addChoice = choice => {
    setSelected(selected.concat(choice));
    onAddingChoice(choice);
  };

  const removeChoice = choice => {
    setSelected(selected.filter(c => c.id !== choice.id));
    onRemovingChoice(choice);
  };

  const onChange = e => {
    const choice = choices.filter(c => c.id === e.target.id)[0];
    return isChecked(choice) ? removeChoice(choice) : addChoice(choice);
  };

  return (
    <div>
      {choices.map(choice => (
        <Checkbox
          key={choice.id}
          {...choice}
          onChangeHandler={onChange}
          checked={isChecked(choice)}
          overrideLabelDefault={overrideLabelDefault}
          labelMouseEnter={labelMouseEnter}
          labelMouseLeave={labelMouseLeave}
          active={active}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

CheckboxGroup.defaultProps = {
  overrideLabelDefault: false,
  labelMouseEnter: () => {},
  labelMouseLeave: () => {},
  onAddingChoice: () => {},
  onRemovingChoice: () => {},
  active: false,
  disabled: false
};
