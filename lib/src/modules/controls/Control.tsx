import React from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';
import { ButtonIconContained, ButtonIconContainedDanger } from 'lib';

function Control({
  onClick,
  iconName,
  children,
  className,
  danger,
  ...buttonProps
}) {
  const classNames = cx('control flex mr-2', className);
  const ButtonComponent = danger
    ? ButtonIconContainedDanger
    : ButtonIconContained;

  return (
    <div className={classNames}>
      {children || (
        <ButtonComponent
          name={iconName}
          onClick={onClick}
          size="sm"
          {...buttonProps}
        />
      )}
    </div>
  );
}

Control.propTypes = {
  onClick: func.isRequired,
  iconName: string.isRequired,
  danger: bool
};

Control.defaultProps = {
  danger: false
};

export { Control };
