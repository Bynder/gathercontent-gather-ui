import React from 'react';
import { bool, number } from 'prop-types';
import { ButtonIcon } from '../ButtonNew/ButtonIcon/ButtonIcon';
import { ButtonIconDanger } from '../ButtonNew/ButtonIcon/ButtonIconDanger';

export function FieldRepeatableControls({ repeatPosition, isLastRepeat }) {
  const label = `${repeatPosition < 9 ? '0' : ''}${repeatPosition + 1}`;

  return (
    <div className="flex flex-row-reverse">
      <div className="flex">
        {repeatPosition > 0 && (
          <ButtonIconDanger name="trash" className="mx-1 repeat-icon" />
        )}
        {repeatPosition > 0 && (
          <ButtonIcon name="arrowUp" className="mx-1 repeat-icon" />
        )}
        {!isLastRepeat && (
          <ButtonIcon name="arrowDown" className="mx-1 repeat-icon" />
        )}
        <span className="w-1" />
        <span className="leading-8 text-neutral-primary text-lg">{label}</span>
      </div>
    </div>
  );
}

FieldRepeatableControls.propTypes = {
  repeatPosition: number.isRequired,
  isLastRepeat: bool.isRequired
};
