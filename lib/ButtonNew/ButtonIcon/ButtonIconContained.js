import React from 'react';
import { ButtonIcon } from 'lib';
import { buttonIconDefaultProps } from '../common';

function ButtonIconContained(props) {
  const classNames = `button-icon-contained ${props.className}`;

  return <ButtonIcon className={classNames} {...props} />;
}

ButtonIconContained.propTypes = buttonIconDefaultProps;

export { ButtonIconContained };
