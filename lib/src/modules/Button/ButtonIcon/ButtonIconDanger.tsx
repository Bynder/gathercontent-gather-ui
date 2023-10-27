import React from "react";
import cx from "classnames";
import { Icon } from "lib";
import { ButtonBase } from "../ButtonBase";
import { sizes, getSizeClasses, buttonIconDefaultProps } from "../common";

export function ButtonIconDanger({
  className,
  disabled,
  name,
  active,
  size,
  ...rest
}: any) {
  const classes = cx(
    className,
    "gui-button-icon-danger",
    {
      "gui-button-icon-danger-active": active,
      "gui-button-icon-danger-sm": size === sizes.sm,
    },
    getSizeClasses(size)
  );

  const iconTypes = [];

  if (!disabled) {
    iconTypes.push("red-on-button-parent-active");
  }

  if (active) {
    iconTypes.push("primary-red");
  }

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon name={name} types={iconTypes} defaultActiveColor={false} />
    </ButtonBase>
  );
}

ButtonIconDanger.sizes = sizes;

ButtonIconDanger.defaultProps = buttonIconDefaultProps;
