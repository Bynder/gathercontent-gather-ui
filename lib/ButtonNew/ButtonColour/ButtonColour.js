import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';

export function ButtonColour({
  className,
  disabled,
  colour,
  active,
  children,
  style,
  ...rest
}) {
  const classes = cx('button-colour', className, {
    'button-colour-active': !disabled && active
  });

  const buttonStyle = {
    ...style,
    color: colour
  };

  return (
    <ButtonBase
      className={classes}
      disabled={disabled}
      size={false}
      style={buttonStyle}
      {...rest}
    >
      {``}
    </ButtonBase>
  );
}
