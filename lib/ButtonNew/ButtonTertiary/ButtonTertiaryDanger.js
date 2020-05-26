import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import { propTypes, defaultProps, sizes } from '../common';

function ButtonTertiaryDanger({ children, className, disabled, ...rest }) {
  const nonDisabledClasses = cx(
    'bg-white',
    'text-red-primary',
    'hover:bg-red-95',
    'active:bg-red-90',
    'focus:shadow-button-tertiary-danger-focus'
  );

  const classes = cx(className, {
    'text-neutral-primary border-neutral-90': disabled,
    [nonDisabledClasses]: !disabled
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
