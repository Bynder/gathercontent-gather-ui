import React from "react";
import { ButtonIconDanger } from "lib";
import { sizes } from "../common";

export function ButtonIconContainedDanger({ className, ...rest }: any) {
  const classNames = `gui-button-icon-contained-danger ${className}`;

  return <ButtonIconDanger className={classNames} {...rest} />;
}

ButtonIconContainedDanger.sizes = sizes;
