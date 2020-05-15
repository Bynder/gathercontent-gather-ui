import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiary({ children, className, disabled, active, ...rest }) {
  const classes = cx(
    'border-transparent',
    'hover:bg-neutral-95',
    'active:bg-neutral-90',
    'focus:border-neutral-20 focus:shadow-neutral-focus-sm',
    className,
    {
      'text-neutral-primary bg-neutral-95': disabled,
      'text-neutral-20 bg-white': !disabled,
      'bg-neutral-90': active
    }
  );

  return (
    <ButtonBase
      className={classes}
      loaderTypes={['neutral-20']}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonTertiary.propTypes = {
  ...propTypes,
  active: bool
};

ButtonTertiary.defaultProps = {
  ...defaultProps,
  active: false
};

ButtonTertiary.sizes = sizes;

export { ButtonTertiary };
