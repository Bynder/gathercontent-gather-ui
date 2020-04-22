import React from 'react';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import { propTypes, defaultProps, sizes } from './common';

function ButtonPrimary({
  children,
  className,
  disabled,
  connectedRight,
  danger,
  ...rest
}) {
  const classes = cx('text-white', className, {
    'bg-blue-primary': !danger,
    'bg-red-primary': danger,
    'bg-neutral-90 text-neutral-primary': disabled,
    'border-blue-40': connectedRight && !disabled,
    'border-neutral-80': connectedRight && disabled,
    'hover:bg-blue-60 hover:shadow-blue active:bg-blue-40 active:shadow-blue-inset':
      !disabled && !danger,
    'hover:bg-red-60 hover:shadow-red active:bg-red-40 active:shadow-red-inset':
      !disabled && danger
  });

  return (
    <ButtonBase
      className={classes}
      loaderTypes={['white']}
      disabled={disabled}
      connectedRight={connectedRight}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonPrimary.propTypes = propTypes;

ButtonPrimary.defaultProps = defaultProps;

ButtonPrimary.sizes = sizes;

export { ButtonPrimary };
