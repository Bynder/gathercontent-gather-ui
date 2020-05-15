import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonPrimary({
  children,
  className,
  disabled,
  connectedRight,
  connectedLeft,
  ...rest
}) {
  const connected = connectedRight || connectedLeft;

  const disabledClasses = cx(
    'text-neutral-primary bg-neutral-90',
    'border-transparent',
    {
      'border-neutral-80': connected
    }
  );

  const nonDisabledClasses = cx(
    'text-white bg-blue-primary',
    'hover:bg-blue-60 active:bg-blue-40',
    {
      'border-blue-primary': !connected,
      'border-blue-40': connected
    }
  );

  const classes = cx(
    'border border-solid',
    'active:border-blue-30',
    'focus:border-white focus:shadow-blue-focus-md',
    disabled ? disabledClasses : nonDisabledClasses,
    className
  );

  return (
    <ButtonBase
      className={classes}
      loaderTypes={['white']}
      disabled={disabled}
      connectedRight={connectedRight}
      connectedLeft={connectedLeft}
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
