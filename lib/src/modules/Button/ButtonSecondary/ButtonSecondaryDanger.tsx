import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

export function ButtonSecondaryDanger({
  children,
  className,
  disabled,
  ...rest
}: any) {
  const disabledClasses = cx('bg-neutral-95 text-neutral-primary');

  const nonDisabledClasses = cx(
    'bg-white text-red-primary',
    'hover:bg-red-95 hover:border-red-primary',
    'active:bg-red-90 active:shadow-none'
  );

  const classes = cx(
    'inherit-color-icon',
    'border-neutral-90',
    'focus:border-red-primary focus:shadow-button-tertiary-danger-focus',
    disabled ? disabledClasses : nonDisabledClasses,
    className
  );

  return (
    <ButtonBase className={classes} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  );
}

ButtonSecondaryDanger.propTypes = propTypes;

ButtonSecondaryDanger.defaultProps = defaultProps;

ButtonSecondaryDanger.sizes = sizes;
