import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiaryDanger({ children, className, disabled, ...rest }) {
  const classes = cx('bg-white focus:shadow-red-focus', className, {
    'text-neutral-primary': disabled,
    'text-red-primary hover:bg-red-95 active:bg-red-90': !disabled
  });

  return (
    <ButtonBase
      className={classes}
      loaderTypes={['danger']}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonTertiaryDanger.propTypes = propTypes;

ButtonTertiaryDanger.defaultProps = defaultProps;

ButtonTertiaryDanger.sizes = sizes;

export { ButtonTertiaryDanger };
