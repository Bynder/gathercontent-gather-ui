import React from 'react';
import { bool, number } from 'prop-types';
import { ButtonIcon } from '../ButtonNew/ButtonIcon/ButtonIcon';
import { ButtonIconDanger } from '../ButtonNew/ButtonIcon/ButtonIconDanger';

const RepeatableSettings = ({
  isTextDirLTR,
  fieldIsActive,
  repeatPosition,
  isLastRepeat
}) => {
  const label = `${repeatPosition < 9 ? '0' : ''}${repeatPosition + 1}`;

  return (
    <div
      className={`
      text-neutral-primary
      text-lg
      leading-snug
      flex
      items-center
      -my-3
      ${isTextDirLTR ? 'ml-auto' : 'mr-auto'}
    `}
    >
      <div
        className={`
        ${fieldIsActive ? '' : 'opacity-0'}
        group-hover:opacity-100
        transition-opacity
        duration-200
        ease-animation-curve
        flex`}
      >
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
      <span className={`leading-8 my-2 ${isTextDirLTR ? 'ml-2' : 'mr-2'}`}>
        {label}
      </span>
    </div>
  );
};

RepeatableSettings.defaultProps = {
  isTextDirLTR: true
};

RepeatableSettings.propTypes = {
  isTextDirLTR: bool,
  fieldIsActive: bool.isRequired,
  repeatPosition: number.isRequired,
  isLastRepeat: bool.isRequired
};

export { RepeatableSettings };
