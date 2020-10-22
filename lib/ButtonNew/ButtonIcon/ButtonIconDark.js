import React from 'react';
import { ButtonIcon } from 'lib';
import { sizes, buttonIconDefaultProps } from '../common';

function ButtonIconDark({ className, ...rest }) {
  const classNames = `button-icon-dark ${className}`;

  return <ButtonIcon className={classNames} {...rest} />;
}

ButtonIconDark.sizes = sizes;

ButtonIconDark.defaultProps = buttonIconDefaultProps;

export default ButtonIconDark;
