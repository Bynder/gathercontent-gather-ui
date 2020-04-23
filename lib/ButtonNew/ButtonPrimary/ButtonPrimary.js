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
  const classes = cx('text-white bg-blue-primary', className, {
    'hover:bg-blue-60 hover:shadow-blue active:bg-blue-40 active:shadow-blue-inset focus:shadow-blue-focus': !disabled,
    'border-blue-40': connectedRight && !disabled,

    'bg-neutral-90 text-neutral-primary': disabled,
    'border-neutral-80': connectedRight && disabled
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
