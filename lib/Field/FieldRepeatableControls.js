import React from 'react';
import { bool, number, string } from 'prop-types';
import cx from 'classnames';
import { ButtonIcon } from '../ButtonNew/ButtonIcon/ButtonIcon';
import { ButtonIconDanger } from '../ButtonNew/ButtonIcon/ButtonIconDanger';

export function FieldRepeatableControls({
  repeatPosition,
  isLastRepeat,
  isActive,
  className
}) {
  const label = `${repeatPosition < 9 ? '0' : ''}${repeatPosition + 1}`;

  const classes = cx(
    className,
    'flex justify-end',
    'transition ease-animation-curve duration-200',
    {
      'opacity-0 group-hover:opacity-100': !isActive
    }
  );

  return (
    <div className={classes}>
      {repeatPosition > 0 && <ButtonIconDanger name="trash" className="mx-1" />}
      {repeatPosition > 0 && <ButtonIcon name="arrowUp" className="mx-1" />}
      {!isLastRepeat && <ButtonIcon name="arrowDown" className="mx-1" />}
      <span className="w-1" />
      <span className="leading-8 text-neutral-primary text-lg">{label}</span>
    </div>
  );
}

FieldRepeatableControls.propTypes = {
  repeatPosition: number.isRequired,
  isLastRepeat: bool.isRequired,
  isActive: bool,
  className: string
};

FieldRepeatableControls.defaultProps = {
  isActive: false,
  className: ''
};
