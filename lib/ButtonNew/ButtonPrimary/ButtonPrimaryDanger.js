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
  const classes = cx(
    'text-white bg-red-primary focus:shadow-red-80-focus',
    className,
    {
      'hover:bg-red-60 hover:shadow-red active:bg-red-40 active:shadow-red-inset': !disabled,
      'border-red-40': connectedRight && !disabled,

      'bg-neutral-90 text-neutral-primary': disabled,
      'border-neutral-80': connectedRight && disabled
    }
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
