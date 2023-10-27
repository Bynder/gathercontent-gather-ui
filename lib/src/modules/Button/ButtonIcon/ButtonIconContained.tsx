import React from "react";
import { ButtonIcon } from "lib";
import { sizes } from "../common";

function ButtonIconContained({ className, ...rest }: any) {
  const classNames = `gui-button-icon-contained ${className}`;

  return <ButtonIcon className={classNames} {...rest} />;
}

ButtonIconContained.sizes = sizes;

export { ButtonIconContained };
