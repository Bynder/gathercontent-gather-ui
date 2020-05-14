import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiary({ children, className, disabled, active, ...rest }) {
  const classes = cx('bg-white focus:shadow-blue-focus-sm', className, {
    'text-neutral-primary': disabled,
    'text-blue-primary': !disabled,
    'hover:bg-blue-95 active:bg-blue-90': !disabled && !active,
    'bg-blue-90': active
  });

  return (
    <ButtonBase
      className={classes}
      loaderTypes={['primary-blue']}
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
