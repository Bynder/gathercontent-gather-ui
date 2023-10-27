import React from "react";
import { ButtonIcon } from "lib";
import { sizes, buttonIconDefaultProps } from "../common";

export function ButtonIconDark({ className, ...rest }: any) {
  const classNames = `gui-button-icon-dark ${className}`;

  return <ButtonIcon className={classNames} {...rest} />;
}

ButtonIconDark.sizes = sizes;

ButtonIconDark.defaultProps = buttonIconDefaultProps;

export default ButtonIconDark;
