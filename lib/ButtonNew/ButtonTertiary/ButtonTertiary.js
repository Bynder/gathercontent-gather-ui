import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiary({ children, className, disabled, active, ...rest }) {
  const nonDisabledClasses = cx(
    'border-white',
    'hover:bg-neutral-95 hover:border-neutral-95',
    'active:bg-neutral-90 active:border-neutral-90 active:shadow-none',
    'focus:border-neutral-20 focus:shadow-button-tertiary-focus',
    'text-neutral-20 bg-transparent',
    {
      'bg-neutral-90': active
    }
  );

  const classes = cx(className, {
    [nonDisabledClasses]: !disabled,
    'text-neutral-primary bg-neutral-95 border-neutral-95': disabled
  });

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
