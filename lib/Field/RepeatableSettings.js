import React from 'react';
import { bool, number } from 'prop-types';
import { ButtonIcon } from '../ButtonNew/ButtonIcon/ButtonIcon';
import { ButtonIconDanger } from '../ButtonNew/ButtonIcon/ButtonIconDanger';

export const RepeatableSettings = ({ repeatPosition, isLastRepeat }) => {
  const label = `${repeatPosition < 9 ? '0' : ''}${repeatPosition + 1}`;

  return (
    <div
      className="field__repeatable-settings
      text-neutral-primary
      text-lg
      leading-snug
      flex
      items-center
      -my-3"
    >
      <div className="flex field__repeatable-settings-controls">
        {repeatPosition > 0 && (
          <ButtonIconDanger name="trash" className="repeat-icon m-0" />
        )}
        {repeatPosition > 0 && (
          <ButtonIcon name="arrowUp" className="repeat-icon m-0" />
        )}
        {!isLastRepeat && (
          <ButtonIcon name="arrowDown" className="repeat-icon m-0" />
        )}
      </div>
      <span className="leading-8 my-2 field__repeatable-settings-label">
        {label}
      </span>
    </div>
  );
};

RepeatableSettings.propTypes = {
  repeatPosition: number.isRequired,
  isLastRepeat: bool.isRequired
};
