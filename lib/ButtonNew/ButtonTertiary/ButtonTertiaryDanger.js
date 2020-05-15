import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiaryDanger({ children, className, disabled, ...rest }) {
  const classes = cx(
    'bg-white border-solid',
    'hover:bg-red-95',
    'active:bg-red-90',
    'focus:shadow-red-focus-sm focus:border-red-primary',
    className,
    {
      'text-neutral-primary border-neutral-90': disabled,
      'text-red-primary border-transparent': !disabled
    }
  );

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
