import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonSecondary({
  children,
  className,
  disabled,
  connectedRight,
  ...rest
}) {
  const classes = cx(
    'text-blue-primary inherit-color-icon bg-white focus:shadow-blue-focus-sm shadow-outline-blue-primary',
    className,
    {
      'hover:bg-blue-95 hover:border-blue-primary active:bg-blue-90 shadow-outline-blue-primary': !disabled,
      'border-blue-40': connectedRight && !disabled,

      'bg-neutral-95 text-neutral-primary shadow-outline-neutral-90': disabled,
      'border-neutral-80': connectedRight && disabled
    }
  );

  return (
    <ButtonBase
      className={classes}
      disabled={disabled}
      connectedRight={connectedRight}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonSecondary.propTypes = propTypes;

ButtonSecondary.defaultProps = defaultProps;

ButtonSecondary.sizes = sizes;

export { ButtonSecondary };
