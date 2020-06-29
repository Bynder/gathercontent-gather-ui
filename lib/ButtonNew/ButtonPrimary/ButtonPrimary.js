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
  const disabledClasses = cx('text-neutral-primary bg-neutral-95', {
    'border-neutral-80': connectedRight
  });

  const nonDisabledClasses = cx(
    'text-white bg-blue-primary',
    'active:bg-blue-40 active:shadow-button-primary-active',
    'hover:bg-blue-60 hover:shadow-button-primary-hover',
    'focus:shadow-button-primary-focus relative focus:z-50',
    {
      'border-blue-40': connectedRight
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
