import React from "react";
import cx from "classnames";
import { Icon } from "lib";
import { ButtonBase } from "../ButtonBase";
import { sizes, getSizeClasses, buttonIconDefaultProps } from "../common";

function ButtonIcon({
  className,
  disabled,
  name,
  active,
  size,
  iconTitle,
  children,
  enabled,
  defaultFillColor,
  ...rest
}: any) {
  const classes = cx(
    "gui-button-icon",
    className,
    {
      "gui-button-icon-active": !disabled && active,
      "gui-button-icon-enabled": !disabled && enabled && !active,
      "gui-button-icon-no-fill": !defaultFillColor,
      "rounded-small": size === sizes.sm,
    },
    getSizeClasses(size)
  );

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      {!!name && (
        <Icon
          name={name}
          title={iconTitle}
          defaultActiveColor={false}
          defaultFillColor={defaultFillColor}
        />
      )}
      {children}
    </ButtonBase>
  );
}

ButtonIcon.sizes = sizes;

ButtonIcon.defaultProps = {
  ...buttonIconDefaultProps,
  enabled: false,
};

export { ButtonIcon };
