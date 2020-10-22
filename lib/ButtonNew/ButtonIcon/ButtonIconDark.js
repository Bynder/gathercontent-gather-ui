import React from 'react';
import { ButtonIcon } from 'lib';
import { buttonIconDefaultProps } from '../common';

function ButtonIconDark({ className, ...rest }) {
  const classNames = `button-icon-dark ${className}`;

  return <ButtonIcon className={classNames} {...rest} />;
}

ButtonIconDark.propTypes = buttonIconDefaultProps;

export default ButtonIconDark;
