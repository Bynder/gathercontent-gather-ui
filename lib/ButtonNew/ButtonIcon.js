import React from 'react';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import { propTypes, defaultProps, sizes } from './common';

function ButtonIcon({ children, className, disabled, danger, ...rest }) {
  const classes = cx('bg-white', className, {
    'text-neutral-primary': disabled,
    'text-blue-primary': !disabled && !danger,
    'hover:bg-blue-95 active:bg-blue-90': !disabled && !danger,
    'text-red-primary hover:bg-red-95 active:bg-red-90': !disabled && danger
  });

  const loaderTypes = danger ? ['danger'] : ['primary-blue'];

  return (
    <ButtonBase
      className={classes}
      loaderTypes={loaderTypes}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonIcon.propTypes = propTypes;

ButtonIcon.defaultProps = defaultProps;

ButtonIcon.sizes = sizes;

export { ButtonIcon };
