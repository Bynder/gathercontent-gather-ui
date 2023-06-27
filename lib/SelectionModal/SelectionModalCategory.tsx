import React from 'react';
import { bool, string, number } from 'prop-types';
import cx from 'classnames';

function SelectionModalCategory({
  isSelected,
  className,
  name,
  subText,
  counter,
  ...rest
}) {
  const buttonClasses = cx(
    `bg-white relative border-solid flex w-full rounded outline-none px-3 py-2 border border-neutral-90 items-center ${className}`,
    {
      'text-input-border-focus': isSelected,
      'hover:border-blue-primary': !isSelected
    }
  );

  const nameClasses = cx('m-0 mb-1', {
    'text-neutral-20': !isSelected,
    'text-blue-primary': isSelected
  });

  return (
    <button className={buttonClasses} type="button" {...rest}>
      <div className="text-left">
        <p className={nameClasses}>{name}</p>
        {subText && (
          <p className="text-sm text-neutral-primary m-0">{subText}</p>
        )}
      </div>
      {counter !== 0 && (
        <div className="text-blue-primary ml-auto">{counter}</div>
      )}
    </button>
  );
}

SelectionModalCategory.propTypes = {
  isSelected: bool,
  className: string,
  name: string.isRequired,
  subText: string,
  counter: number
};

SelectionModalCategory.defaultProps = {
  isSelected: false,
  className: '',
  subText: '',
  counter: 0
};

export default SelectionModalCategory;
