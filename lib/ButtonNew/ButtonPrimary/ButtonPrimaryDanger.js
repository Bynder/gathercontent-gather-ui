import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonPrimaryDanger({
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
    'text-white bg-red-primary ',
    'hover:bg-red-60 active:bg-red-40',
    {
      'border-red-primary': !connected,
      'border-red-40': connected
    }
  );

  const classes = cx(
    'border border-solid',
    'active:border-red-30',
    'focus:border-white focus:shadow-red-focus-md',
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

ButtonPrimaryDanger.propTypes = propTypes;

ButtonPrimaryDanger.defaultProps = defaultProps;

ButtonPrimaryDanger.sizes = sizes;

export { ButtonPrimaryDanger };
