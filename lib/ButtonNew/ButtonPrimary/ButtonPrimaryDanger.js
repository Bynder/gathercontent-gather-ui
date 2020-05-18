import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonPrimaryDanger({
  children,
  className,
  disabled,
  connectedRight,
  ...rest
}) {
  const disabledClasses = cx('text-neutral-primary bg-neutral-90', {
    'border-neutral-80': connectedRight
  });

  const nonDisabledClasses = cx(
    'text-white bg-red-primary ',
    'hover:bg-red-60 hover:shadow-button-secondary-hover',
    'active:bg-red-40 active:shadow-button-secondary-active',
    'focus:shadow-button-secondary-focus relative focus:z-50',
    {
      'border-red-40': connectedRight
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

ButtonPrimaryDanger.propTypes = propTypes;

ButtonPrimaryDanger.defaultProps = defaultProps;

ButtonPrimaryDanger.sizes = sizes;

export { ButtonPrimaryDanger };
