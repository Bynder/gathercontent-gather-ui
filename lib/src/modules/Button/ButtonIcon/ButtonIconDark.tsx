import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonIcon } from 'lib';
import { sizes, buttonIconDefaultProps } from '../common';

function ButtonIconDark({
  className,
  ...rest
}: any) {
  const classNames = `button-icon-dark ${className}`;

  return <ButtonIcon className={classNames} {...rest} />;
}

ButtonIconDark.sizes = sizes;

ButtonIconDark.defaultProps = buttonIconDefaultProps;

export default ButtonIconDark;
