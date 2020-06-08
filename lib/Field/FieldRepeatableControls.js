import React from 'react';
import { bool, func, number, shape } from 'prop-types';
import cx from 'classnames';
import { ButtonIcon } from '../ButtonNew/ButtonIcon/ButtonIcon';
import { ButtonIconDanger } from '../ButtonNew/ButtonIcon/ButtonIconDanger';

export function FieldRepeatableControls({
  repeatPosition,
  isLastRepeat,
  onDeleteRepeatedField,
  onMoveRepeatedFieldUp,
  onMoveRepeatedFieldDown,
  isActive,
  controls
}) {
  const label = `${repeatPosition < 9 ? '0' : ''}${repeatPosition + 1}`;

  const buttonClasses = cx(
    'mx-1',
    'transition ease-animation-curve duration-200',
    {
      'opacity-0 group-hover:opacity-100': !isActive
    }
  );

  return (
    <div className="flex justify-end">
      {repeatPosition > 0 && controls.trash && (
        <ButtonIconDanger
          name="trash"
          className={buttonClasses}
          size={ButtonIconDanger.sizes.sm}
          onClick={onDeleteRepeatedField}
        />
      )}
      {repeatPosition > 0 && controls.reorder && (
        <ButtonIcon
          name="arrowUp"
          className={buttonClasses}
          size={ButtonIcon.sizes.sm}
          onClick={onMoveRepeatedFieldUp}
        />
      )}
      {!isLastRepeat && controls.reorder && (
        <ButtonIcon
          name="arrowDown"
          className={buttonClasses}
          size={ButtonIcon.sizes.sm}
          onClick={onMoveRepeatedFieldDown}
        />
      )}
      <span className="w-1" />
      <span className="leading-6 text-neutral-primary text-lg">{label}</span>
    </div>
  );
}

FieldRepeatableControls.propTypes = {
  repeatPosition: number.isRequired,
  isLastRepeat: bool.isRequired,
  onDeleteRepeatedField: func.isRequired,
  onMoveRepeatedFieldUp: func.isRequired,
  onMoveRepeatedFieldDown: func.isRequired,
  isActive: bool,
  controls: shape({
    trash: bool.isRequired,
    reorder: bool.isRequired
  })
};

FieldRepeatableControls.defaultProps = {
  isActive: false,
  controls: {
    trash: true,
    reorder: true
  }
};
