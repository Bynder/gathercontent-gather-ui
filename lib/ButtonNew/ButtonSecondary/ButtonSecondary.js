import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonSecondary({ children, className, disabled, ...rest }) {
  const disabledClasses = cx('bg-neutral-95 text-neutral-primary');

  const nonDisabledClasses = cx(
    'bg-white text-blue-primary',
    'hover:bg-blue-95 hover:border-blue-primary',
    'active:bg-blue-90 active:shadow-none'
  );

  const classes = cx(
    'inherit-color-icon',
    'border-neutral-90',
    'focus:border-blue-primary focus:shadow-button-secondary-focus',
    disabled ? disabledClasses : nonDisabledClasses,
    className
  );

  return (
    <ButtonBase className={classes} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  );
}

ButtonSecondary.propTypes = propTypes;

ButtonSecondary.defaultProps = defaultProps;

ButtonSecondary.sizes = sizes;

export { ButtonSecondary };
