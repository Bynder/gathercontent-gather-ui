import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonPrimary({
  children,
  className,
  disabled,
  connectedRight,
  ...rest
}) {
  const disabledClasses = cx(
    'text-neutral-primary bg-neutral-95 border-neutral-95',
    {
      'border-r-neutral-90': connectedRight
    }
  );

  const nonDisabledClasses = cx(
    'text-white bg-blue-primary border-blue-primary',
    'active:bg-blue-40 active:border-blue-30 active:shadow-none',
    'hover:bg-blue-60 hover:border-blue-primary',
    'focus:border-white focus:shadow-button-primary-focus relative focus:z-50',
    {
      'border-r-blue-40': connectedRight
    }
  );

  const classes = cx(
    disabled ? disabledClasses : nonDisabledClasses,
    className
  );

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
