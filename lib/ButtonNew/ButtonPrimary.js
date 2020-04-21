import React from 'react';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import { propTypes, defaultProps, sizes } from './common';

function ButtonPrimary({
  children,
  className,
  disabled,
  connectedRight,
  ...rest
}) {
  const classes = cx('bg-blue-primary text-white ', className, {
    'bg-neutral-90 text-neutral-primary': disabled,
    'border-blue-40': connectedRight && !disabled,
    'border-neutral-80': connectedRight && disabled,
    'hover:bg-blue-60 hover:shadow-blue': !disabled,
    'active:bg-blue-40 active:shadow-none': !disabled
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
