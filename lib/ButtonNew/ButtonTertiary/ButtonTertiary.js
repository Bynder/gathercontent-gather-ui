import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiary({ children, className, disabled, active, ...rest }) {
  const classes = cx(
    'bg-white focus:shadow-neutral-focus-sm border-0',
    className,
    {
      'text-neutral-primary bg-neutral-95': disabled,
      'text-neutral-20': !disabled,
      'hover:bg-neutral-95 active:bg-neutral-90': !disabled && !active,
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
