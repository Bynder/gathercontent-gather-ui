import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiary({ children, className, disabled, ...rest }) {
  const classes = cx('bg-white focus:shadow-blue-focus', className, {
    'text-neutral-primary': disabled,
    'text-blue-primary hover:bg-blue-95 active:bg-blue-90': !disabled
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

ButtonTertiary.propTypes = propTypes;

ButtonTertiary.defaultProps = defaultProps;

ButtonTertiary.sizes = sizes;

export { ButtonTertiary };
